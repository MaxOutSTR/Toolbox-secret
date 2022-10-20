import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import * as secretService from '../../services/secret.service'
const NavBar = () => {
  const [fileNames, setFileNames] = useState([])
  useEffect(() => {
    secretService.getFileList().then((res) => {
      setFileNames(res.data.files)
    })
  }, [])
  return (
    <Navbar bg='dark' variant='dark'>
      <Container fluid>
        <Navbar.Brand href='/'>Toolbox's Secret Files</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-dark-example' />
        <Navbar.Collapse id='navbar-dark-example'>
          <Nav>
            <NavDropdown
              id='nav-dropdown-dark-example'
              title='Choose file'
              menuVariant='dark'
            >
              {
                fileNames?.map((fileName, index) => {
                  return (
                    <NavDropdown.Item key={index} href={`/${fileName}`}>
                      {fileName}
                    </NavDropdown.Item>
                  )
                })
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
