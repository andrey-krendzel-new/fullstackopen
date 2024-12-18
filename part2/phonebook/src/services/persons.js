import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const get = () => {
  const request = axios.get(baseUrl)
  return request
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request
}

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request
}

export default { getAll, get, create, update, deletePerson }