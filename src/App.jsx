import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MusicStreaming from './pages/MusicStreaming'
import MusicUpload from './pages/MusicUpload'
import { Toaster } from 'react-hot-toast'
import Contact from './pages/Contact'
import { Analytics } from '@vercel/analytics/react'

const App = () => {
  return (
    <>
    <Analytics/>
    <Toaster/>
    <Routes>

<Route path='/' element={<Home/>} />
<Route path='/stream' element={<MusicStreaming/>} />
<Route path='/upload' element={<MusicUpload/>} />
<Route path='/contact' element={<Contact/>} />
    </Routes>
    
    </>
  )
}

export default App