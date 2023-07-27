const Persons = ({ persons, handleDelete }) => {

  const renderNames = persons.map(person => {
    return (
      <tr key={person.id}>
        <td>{person.name}</td>
        <td>{person.number}</td>
        <td><button onClick={() => handleDelete(person.id, person.name)}>delete</button></td>
      </tr>
    )
  })
  
  return ( 
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
  )
}

export default Persons
