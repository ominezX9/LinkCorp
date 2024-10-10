import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import Router from '@routes/index'

function App() {

  return (
    <>
      <div className="font-satoshi">
        <RouterProvider router={Router}/>
      </div>
    </>
  )
}

export default App
