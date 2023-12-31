import axios from 'axios'
const baseUrl = "http://localhost:8080/persons/"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}

const addPerson = (person) => {
  const request = axios.post(baseUrl, person)
  return request.then(res => res.data)
}

const deletePerson = (personId) => {
  const request = axios.delete(`${baseUrl}${personId}`)
  return request.then(res => res)
}

const updatePerson = (person) => {
  const request = axios.put(`${baseUrl}${person.id}`, person)
  return request.then(res => res.data)
}

export default {getAll, addPerson, deletePerson, updatePerson}
