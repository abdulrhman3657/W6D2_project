import React from 'react'
import { Link } from 'react-router'

function Navbar() {

  const nav_list = [
    {
      title: "home",
      path: "home"
    },
    {
      title: "login",
      path: "/"
    },
    {
      title: "signup",
      path: "signup"
    },
  ]

  return (
    <div>
      <nav>
        <ul className='flex gap-3 p-3'>
          {
            nav_list.map((page, index) => (
              <li className='hover:bg-gray-700 hover:text-white p-1 rounded' key={index}><Link to={page.path}>{page.title}</Link></li>
            ))
          }
            {localStorage.getItem("username") && <li className='p-1 border rounded font-bold bg-blue-100  '>{localStorage.getItem("username")}</li>}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar