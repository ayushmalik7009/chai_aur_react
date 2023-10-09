import React from 'react'
// import useCurrencyapi from '../hooks/useCurrencyapi'


function One({
  name,
  para,
  address,
  url,
  link,
}) {



// const api = useCurrencyapi();
// const options = Object.keys(api)
// console.log(api)


  return (
   <div className='flex border-2 '>
   <div className="w-[300px] rounded-md border mr-3">
      <img
        src={url}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="mt-3 text-sm text-gray-600">
          {para} {address}
        </p>
        <a
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            href={link}
            target="_blank"
            
          >
            Read
          </a>
      </div>
    </div>
   </div>
  )
}

export default One