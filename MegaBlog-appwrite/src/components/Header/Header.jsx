import React from 'react'
import {Container,Logo,LogoutBtn} from '../index' 
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <Header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>
            item.active ?   (
              <li key={item.name}>
                <button onClick={()=> navigate(item.slug)}>{item.name}</button>
              </li>
            ) : null

            )}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>

        </nav>
      </Container>
    </Header>
  )
}

export default Header