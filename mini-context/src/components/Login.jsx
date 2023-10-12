import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
const[username,setusername] = useState('Ankur')
const[password,setpassword] = useState('Malik')

const {setUser}  = useContext(UserContext)
    const handlesubmit=(e)=>{
e.preventDefault();
setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" name='username' value={username} onChange={(e)=> setusername(e.target.value)} placeholder='username' />
        <input type="text" name='password' value={password} onChange={(e)=> setpassword(e.target.value)} placeholder='password' />
        <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login