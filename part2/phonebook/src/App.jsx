import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '07738277245' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = e => {
    e.preventDefault()
    if (persons.findIndex(person => person.name.toUpperCase() === newName.toUpperCase()) !== -1) {
      alert(`${newName} is already in the phonebook`)
      return
    }
    setPersons([
      ...persons,
      {
        name: newName,
      }
    ])
    setNewName('')
  }

  const handleChange = e => {
    setNewName(e.target.value)
  }

  const renderNames = persons.map(person => {
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
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleChange} value={newName} />
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
