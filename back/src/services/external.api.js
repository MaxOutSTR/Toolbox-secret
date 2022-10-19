const axios = require('axios')
const token = 'aSuperSecretKey'
const config = {
  headers: { Authorization: `Bearer ${token}` }
}

const listFiles = async () => {
  const response = axios.get('https://echo-serv.tbxnet.com/v1/secret/files', config)
  return response
}
const getFile = async (fileName) => {
  const response = axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`, config)
  return response
}

module.exports = {
  listFiles,
  getFile
}
