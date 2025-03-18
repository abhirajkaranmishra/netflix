import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut,onAuthStateChanged } from "firebase/auth";
import {useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO,USER_AVATAR } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  const handleGptSearchClick = ()=>{
      dispatch(toggleGptSearchView());
  }

  const handleSignOut =()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
  return ()=> unsubscribe();
},[]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
      <img className="w-44" src={LOGO} alt = "logo" />
      </div>
      {user && (<div className="flex p-2">
        
      <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
      onClick={handleGptSearchClick}>{showGptSearch?"HomePage":"GptSearch"}</button>
      <img className="w-12 h-12" src={USER_AVATAR} alt="use-icon"/>
      <button className="font-bold text-black" onClick={handleSignOut}>SIGN-OUT</button>
      </div>)}
    </div>
  );
};

export default Header