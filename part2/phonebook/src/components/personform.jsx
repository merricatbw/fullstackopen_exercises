const PersonForm = ({ name, number, nameHandler, numberHandler, onSubmit }) => {
  return (
      <form onSubmit={onSubmit}>
        <div>
          name: <input onChange={nameHandler} value={name} />
        </div>
        <div>
          number: <input onChange={numberHandler} value={number} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

  )
}

export default PersonForm
