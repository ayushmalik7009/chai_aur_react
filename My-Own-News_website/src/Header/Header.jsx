import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../Components/Slice';


export function Header() {
    const dispatch = useDispatch()
    const cate = useSelector((state) => state.todos);
    const isCategoryActivegeneral = (category) => category === cate.category;
    const isCategoryActivescience = (category) => category === cate.category;
    const isCategoryActivebusiness = (category) => category === cate.category;
    const isCategoryActivetechnology = (category) => category === cate.category;
    console.log(cate.category)

  return (
    <div className="flex flex-col space-y-2 mt-4 md:flex-row md:space-x-2 md:space-y-0 justify-center">
      <button
        type="button"
        onClick={() => dispatch(setCategory("general"))}
        className={`rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black/10 ${isCategoryActivegeneral('general') ? 'bg-black/10' : ''}`}
      >
        General
      </button>
      <button
        type="button"
        onClick={() => dispatch(setCategory("Science"))}
        className={`rounded-md border border-yellow-600 px-3 py-2 text-sm font-semibold text-yellow-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 hover:bg-yellow-300/80 ${isCategoryActivescience('Science') ? 'bg-yellow-300/80' : ''}`}
      >
        Science
      </button>
      <button
        type="button"
        onClick={() => dispatch(setCategory("Business"))}
        className={`rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:bg-red-200/80 ${isCategoryActivebusiness('Business') ? 'bg-red-200/80' : ''}`}
      >
       Business
      </button>
      <button
        type="button"
        onClick={() => dispatch(setCategory("technology"))}
        className={`rounded-md border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 hover:bg-green-200/80 ${isCategoryActivetechnology('technology') ? 'bg-green-200/80' : ''}`}
      >
        Technology
      </button>
    </div>
  )
}
