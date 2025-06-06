import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2'

function login() {


  let navigate = useNavigate();

  function redirectPath(){
      navigate("home")
  }

 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const checkInput = () => {
      let stored_email = localStorage.getItem("email")
      let stored_password = localStorage.getItem("password")

      if(password === stored_password && email === stored_email) {
          Swal.fire({
            title: "logged in successfully",
            icon: "success"
          })
          
          setEmail("")
          setPassword("") 

          // const navigate = useNavigate()
          // navigate("../login")
          redirectPath()  
          
      } else {
        Swal.fire({
          icon: "error",
          title: "invalid email or password",
        });
      }

    }

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Log in to your account</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">Email</label>
              <div className="mt-2">
                {/* email input */}
                <input value={email}  onChange={(e) => setEmail(e.target.value)} type="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                {/* password input */}
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <button onClick={checkInput} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not signed up?
            <Link to="../signup" className="font-semibold text-indigo-600 hover:text-indigo-500"> Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default login