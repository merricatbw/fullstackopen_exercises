import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '07738277245' },
    { name: 'Ada Lovelace', number: '07934429763' },
    { name: 'Jim Halpert', number: '07370573945' },
    { name: 'Dwight Schrute', number: '07982786774' },

  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

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

    setPersons([
      ...persons,
      {
        name: newName,
        number: newNumber,
      }
    ])
    setNewName('')
    setNewNumber('')
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

  const renderNames = filteredList.map(person => {
    return (
      <tr key={person.name}>
        <td>{person.name}</td>
        <td>{person.number}</td>
      </tr>
    )
  })

  return (
    <div>
      <h2>Phonebook</h2>
      search: <input type="text" onChange={handleSearchChange} value={searchTerm} />
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {renderNames} 
        </tbody>
      </table>
    </div>
  )
}

export default App
