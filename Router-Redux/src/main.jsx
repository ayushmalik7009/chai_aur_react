import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route } from 'react-router-dom'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import One from './components/one.jsx'
import Contact from './components/Contact.jsx'
import Layout from './components/Layout/Layout.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element ={<Layout/>}>

    <Route path='One' element={<One/>}/>
    <Route path='Contact' element={<Contact/>}/>
    
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </Provider>
)
