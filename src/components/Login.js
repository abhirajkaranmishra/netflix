import { useState,useRef } from "react"
import Header from "./Header"
import checkValidate from "../utils/Validate";
import {auth} from "../utils/firebase.js"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import {updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { BG_URL } from "../utils/constant.js";


const Login = () => {
 const[isSignInForm,setIsSignInForm]= useState(true);
 const[errorMessage, setErrorMessage] = useState(null);
 const email = useRef(null);
 const password = useRef(null);
 const name = useRef(null);
 const dispatch = useDispatch();

 const toggleSignInForm =() =>
 {
  setIsSignInForm(!isSignInForm);
 }

 const handleButtonClick =()=>{
  const message = checkValidate(email.current.value,password.current.value);
  setErrorMessage(message);

  if(!isSignInForm)
  {
createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => { 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value
    }).then(() => {
      const{uid,email,displayName}=auth.currentUser;
      dispatch(
        addUser({
          uid:uid,
          email:email,
          displayName:displayName
        })
      );
    }).catch((error) => {
      
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
  }
  else
  {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
  }
 }


  return (
    <div>
       <Header/>
       <div>
         <img className="absolute" src = {BG_URL} alt ="background"/>
       </div>
       <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1>{isSignInForm?"SignIn" : "SignUp"}</h1>

          {
            !isSignInForm &&(
              <input ref={name} type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
            )
          }

          <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
          <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
          <p className="text-red-500">{errorMessage}</p>
          <button onClick={handleButtonClick} className="p-4 my-4 w-full bg-red-700 rounded-lg">{isSignInForm ? "Sign In":"Sign Up"}</button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign up now":"Already registered? Sign In"}</p>
       </form>
    </div>
  )
}
export default Login;