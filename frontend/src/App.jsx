import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import 'remixicon/fonts/remixicon.css'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
      </Routes>
    </div>
  )
}

export default App