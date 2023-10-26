import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {reduceBooks} from '../features/todo/todoSlice'
// import { useState } from 'react'

function Todos() {
const dispatch = useDispatch()

const bookk = useSelector(state => state.book)
console.log(bookk)
 
// const addbookHandler = (e) => {
//     e.preventDefault()
//     dispatch(reduceBooks(bookk[0].numbers))
// }

  return (
    <>
      <div className='text-lime-500 text-2xl' >BookContainer</div>
          <h2 className='mt-3'>No of Books = {bookk[0].numbers}</h2>
          <button
        type="button"
        onClick={()=>(dispatch(reduceBooks()))} 
        className="rounded-md bg-black px-3 mt-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Button text
      </button>
    </>
  )
}

export default Todos