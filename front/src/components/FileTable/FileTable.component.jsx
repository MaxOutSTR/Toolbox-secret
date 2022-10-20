import Table from 'react-bootstrap/esm/Table'
import './styles/FileTable.styles.css'
import { useEffect, useState } from 'react'
import EmptyMessage from '../common/EmptyMessage.component'
const FileTable = ({ files }) => {
  const [totalLines, setTotalLines] = useState()
  useEffect(() => {
    let lineCount = 0
    if (!files || files.length === 0 || files[0] === '') {
      setTotalLines(0)
      return
    }
    lineCount = files.reduce((prev, curr) => prev + curr?.lines?.length, 0)
    setTotalLines(lineCount)
  }, [files])

  return (
    <>
      {
        (!totalLines || totalLines === 0)
          ? <EmptyMessage />
          : <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Text</th>
                  <th>Number</th>
                  <th>Hex</th>
                </tr>
              </thead>
              <tbody>
                {
                    files?.map((file) => {
                      return (
                        file.lines?.map((fileLine, index) => {
                          return (
                            <tr key={index}>
                              <td>{file.file}</td>
                              <td>{fileLine.text}</td>
                              <td>{fileLine.number}</td>
                              <td>{fileLine.hex}</td>
                            </tr>
                          )
                        })
                      )
                    })
                  }
              </tbody>
            </Table>
            </div>
      }
    </>
  )
}
export default FileTable
