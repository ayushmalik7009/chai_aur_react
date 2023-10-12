import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element ={<Layout/>}>

      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
