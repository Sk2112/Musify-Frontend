import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MusicStreaming from './pages/MusicStreaming'
import MusicUpload from './pages/MusicUpload'

const App = () => {
  return (
    <>
    <Routes>

<Route path='/' element={<Home/>} />
<Route path='/stream' element={<MusicStreaming/>} />
<Route path='/upload' element={<MusicUpload/>} />

    </Routes>
    
    </>
  )
}

export default App