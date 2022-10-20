import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.component'
import FileTableContainer from './components/FileTable/FileTableContainer.component'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<FileTableContainer />} />
        <Route path='/:fileName' element={<FileTableContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
