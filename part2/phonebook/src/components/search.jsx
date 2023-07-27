const Search = ({ handleChange, searchTerm }) => {
  return (
    <div>
      search: <input type="text" onChange={handleChange} value={searchTerm} />
    </div>
  )
}

export default Search
