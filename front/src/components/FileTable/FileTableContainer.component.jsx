import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FileTable from './FileTable.component'
import Spinner from 'react-bootstrap/esm/Spinner'
import * as secretService from '../../services/secret.service'
import './styles/FileTable.styles.css'
import ErrorMessage from '../common/ErrorMessage.component'
const FileTableComponent = () => {
  const [files, setFiles] = useState([])
  const { fileName } = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setLoading(true)
    if (fileName) {
      try {
        secretService.getFile(fileName).then((res) => {
          setFiles([res.data])
        }).catch((_) => {
          setFiles([])
          setError(true)
        }).finally(() => {
          setLoading(false)
        })
      } catch (ex) {
        setError(true)
      }
      return
    }
    try {
      secretService.getAllFiles().then((res) => {
        setFiles(res.data)
      }).catch((_) => {
        setFiles([])
        setError(true)
      }).finally(() => {
        setLoading(false)
      })
    } catch (ex) {
      setError(true)
    }
  }, [])

  return (
    <div className='file-table-container'>
      {
        (loading)
          ? <Spinner animation='border' variant='dark' />
          : (error)
              ? <ErrorMessage />
              : <FileTable files={files} />
      }
    </div>
  )
}
export default FileTableComponent
