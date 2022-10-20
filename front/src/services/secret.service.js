import http from 'axios'

const apiUrl = 'http://localhost:8080'

export const getAllFiles = () => {
  return http.get(apiUrl + '/files/data')
}

export const getFile = (fileName) => {
  return http.get(apiUrl + '/files/data', {
    params: {
      fileName
    }
  })
}

export const getFileList = () => {
  return http.get(apiUrl + '/files/list')
}
