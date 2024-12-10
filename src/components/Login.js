import { useState } from "react"
import Header from "./Header"

const Login = () => {
 const[isSignInForm,setIsSignInForm]= useState(true);
 const toggleSignInForm =() =>
 {
  setIsSignInForm(!isSignInForm);
 }


  return (
    <div>
       <Header/>
       <div>
         <img className="absolute" src = "https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt ="background"/>
       </div>
       <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1>{isSignInForm?"SignIn" : "SignUp"}</h1>

          {
            !isSignInForm &&(
              <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
            )
          }

          <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
          <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
          <button className="p-4 my-4 w-full bg-red-700 rounded-lg">{isSignInForm ? "Sign In":"Sign Up"}</button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign up now":"Already registered? Sign In"}</p>
       </form>
    </div>
  )
}
export default Login