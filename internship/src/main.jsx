import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import './index.css'
import Q1 from './components/One.jsx'
import Two from './components/Two.jsx'
import Three from './components/Three.jsx'
import Four from './components/Four.jsx'
import Five from './components/Five.jsx'
import Six from './components/Six.jsx'
import Seven from './components/Seven.jsx'
import Home from './components/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element ={<Layout/>}>
      <Route path='' element ={<Home/>} />
    <Route path='One' element={<Q1/>}/>
    <Route path='Two' element={<Two/>}/>
    <Route path='Three' element={<Three/>}/>
    <Route path='Four' element={<Four/>}/>
    <Route path='Five' element={<Five/>}/>
    <Route path='Six' element={<Six/>}/>
    <Route path='Seven' element={<Seven/>}/>
    
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
