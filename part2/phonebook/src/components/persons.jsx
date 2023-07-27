const Persons = ({ persons }) => {

  const renderNames = persons.map(person => {
    return (
      <tr key={person.id}>
        <td>{person.name}</td>
        <td>{person.number}</td>
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
