import { useState, useEffect } from 'react'
import personService from './services/person'

import Persons from './components/persons'
import PersonForm from './components/personform'
import Search from './components/search'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

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
      alert(`${newName} is already in the phonebook`)
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
        setPersons(persons.filter(person => person.id !== id))
      })
  }


  return (
    <div>
      <h1>Phonebook</h1>
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
