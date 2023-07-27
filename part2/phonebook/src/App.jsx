import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = e => {
    e.preventDefault()
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

  const renderNames = persons.map(person => <li key={person.name}>{person.name}</li>)

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
      <ul style={{listStyleType: 'none'}}>
        {renderNames} 
      </ul>
    </div>
  )
}

export default App
