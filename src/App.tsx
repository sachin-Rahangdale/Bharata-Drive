import { useState } from 'react'

import './App.css'
import { Router, RouterProvider } from 'react-router-dom'
import router from './Routes/Index'
import Head from './Component/Head'

function App() {
 

  return (
    <>
    <RouterProvider router={router}/>
      
    </>
  )
}

export default App
