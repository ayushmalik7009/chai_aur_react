import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoloader } from './components/Github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children :[
//       {
//         path:"",
//         element: <Home/>
//       },{ 
//         path:"about",
//         element:<About/>

//       },
//       {
//         path:"Contact",
//         element:<Contact/>
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element ={<Layout/>}>

    <Route path=''        element ={<Home/>} />
    <Route path='about'   element ={<About/>} />
    <Route path='contact' element ={<Contact/>} />
    <Route path='user/:userid' element ={<User/>} />
    <Route loader={githubInfoloader} path='github' element ={<Github/>} />

  </Route>
)
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
