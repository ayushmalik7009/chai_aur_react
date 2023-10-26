import React from 'react'
import { Info, X } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'

export default function One() {
  const todos = useSelector(state => state.todos)
  return (
    <div className="rounded-md border-l-4 border-black bg-gray-100 p-4">
      <div className="flex items-center justify-between space-x-4">
        <div>
          <Info className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm font-medium">
            
            Lorem ipsum dolor, sit {todos[0].text}  amet consectetur adipisicing elit. Officia omnis et esse expedita porro veritatis optio unde laudantium deleniti reprehenderit tenetur hic dolorem ad perferendis quia cupiditate quaerat repellendus, eaque accusamus quisquam officiis molestiae assumenda, natus ea? Ullam voluptates explicabo dignissimos quo corporis quam ipsa voluptas sunt suscipit, labore ea, aspernatur sit maxime. Dignissimos deleniti fuga in libero ea consequatur aut ipsa nisi illo corrupti facilis, voluptate ut officia at veritatis minus sit temporibus itaque fugit numquam est modi. Voluptatibus, soluta eligendi cumque minima voluptas aspernatur earum aut alias minus asperiores, laborum atque quo doloribus? Vero non eligendi facilis unde.
          </p>
        </div>
        <div>
          <X className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
