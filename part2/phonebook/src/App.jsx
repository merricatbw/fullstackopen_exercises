import { useState, useEffect } from 'react'
import personService from './services/person'

import Persons from './components/persons'
import PersonForm from './components/personform'
import Search from './components/search'
import Notification from './components/notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [message, setMessage] = useState('')
  const [isError, setError] = useState(false)

  useEffect(() => {
      personService.getAll()
      .then(res => {
        setPersons(res)
      })
  }, [])

  const filteredList = searchTerm === '' 
    ? persons 
    : persons.filter(person => person.name.toLocaleUpperCase().includes(searchTerm.toUpperCase()))


  const addPerson = e => {
    e.preventDefault()
    if (persons.findIndex(person => person.name.toUpperCase() === newName.toUpperCase()) !== -1) {
      if (!window.confirm(`${newName} is already in the phonebook. Would you like to update their number?`)) return
      const person = persons.find((person) => person.name.toUpperCase() === newName.toUpperCase()) 
      const updatedPerson = {...person, number: newNumber}
      personService.updatePerson(updatedPerson)
        .then(res => {
          setPersons(persons.map(person => person.id === res.id ? res : person))
          setNewName('')
          setNewNumber('')
          displayMessage(`updated contact ${res.name}`, false)
        })
      return
    }

    if (newName === '' || newNumber === '') {
      alert('Please make sure both fields are filled out')
      return
    }

    const person = {name: newName, number: newNumber, id: generateID()}

    personService.addPerson(person)
      .then((res) => {
        setPersons([...persons, res])
        setNewName('')
        setNewNumber('')
        displayMessage(`${res.name} added to phonebook`, false)
      })

  }

  const generateID = () => {
    if (persons.length === 0) return 1
    return persons[persons.length - 1].id + 1
  }

  const handleNameChange = e => {
    setNewName(e.target.value)
  }

  const handleNumberChange = e => {
    setNewNumber(e.target.value)
  }

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleDelete = (id, name) => { 
    if (!window.confirm(`Are you sure you want to delete ${name}`)) return
    personService.deletePerson(id)
      .then(_ => {
        displayMessage(`deleted ${persons.find(person => person.id === id).name}`, false)
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        displayMessage(`${name} has already been removed from server`, true)
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  const displayMessage = (msg, isError) => {
    setError(isError)
    setMessage(msg)
    setTimeout(() => {
      setMessage('')
      setError(false)
    }, 2500)
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <Notification msg={message} isError={isError}/>
      <Search handleChange={handleSearchChange} searchTerm={searchTerm} />
      <h2>new contact</h2>
      <PersonForm 
        name={newName}
        number={newNumber}
        numberHandler={handleNumberChange}
        nameHandler={handleNameChange}
        onSubmit={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredList} handleDelete={handleDelete} />
    </div>
  )
}

export default App
