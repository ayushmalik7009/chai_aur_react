import { useState, useCallback,useEffect ,useRef  } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numallowed, setnumallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [Password, setpassword] = useState("")

const passwordref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numallowed) str += "0123456789"
    if (charallowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  }, [length, numallowed, charallowed])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordref.current ?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{passwordgenerator()},[length,numallowed,charallowed,passwordgenerator])

  // passwordgenerator()
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3 '>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly  ref={passwordref}/>
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => { setlength(e.target.value) }} />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numallowed} id='numberInput' onChange={() => { setnumallowed((prev) => !prev); }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charallowed} id='numberInput' onChange={() => { setcharallowed((prev) => !prev); }} />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
