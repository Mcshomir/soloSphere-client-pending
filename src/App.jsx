import { useState } from 'react'

import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'
import AuthProvider from './AuthProvider/AuthProvider'
function App() {

  return (
    <>
      <AuthProvider>

        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>



    </>
  )
}

export default App
