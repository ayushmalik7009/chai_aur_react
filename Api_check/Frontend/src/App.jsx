import { useEffect, useState } from 'react' 
import './App.css'
import axios from 'axios'

function App() {

  const [products,error,loading] = customReactQuery('/api/products')
// if(error){
//   return <h1>Something went wrong</h1>
// }

// if(loading){
//   return <h1>Loading...</h1>
// }
  return (
    <>
      <h1>Ayush Malik</h1>
      {loading && (<h1>loading</h1>)}
      {error && (<h1>Something went wrong</h1>)}

      <h2>Number of products are : {products.length}</h2>
    </>
  )
}

export default App


const customReactQuery = (urlPath) =>{
  const [products,setproducts] = useState([])
const[error,setError] = useState(false)
const[loading,setloading]=useState(false)

useEffect(()=>{
  (async ()=>{
   try {
    setloading(true)
    setError(false)
     const response = await axios.get(urlPath)
     console.log(response.data);
     setproducts(response.data)
     setloading(false)
   } catch (error) {
    setError(true)
    setloading(false)
   }
  })()
},[])
return [products,error,loading]
}