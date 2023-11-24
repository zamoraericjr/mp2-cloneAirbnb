import React, { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';


import { useDispatch, useSelector } from 'react-redux'
import { handleAuthChange, handleInfoChange, handleTitleChange } from '../../redux/auth';
import UserMenu1 from './UserMenu1';


function UserMenu() {

  const {isOpen} = useSelector(state => state)
  const dispatch = useDispatch()
  const [isOpen1, setIsOpen] = useState(false);

  const logged = JSON.parse(localStorage.getItem('logged')) || [];


  function regHome(){
    if(logged==""){
      dispatch(handleAuthChange(!isOpen)), dispatch(handleTitleChange("Login"))
    }
    else{
      dispatch(handleAuthChange(!isOpen)), dispatch(handleTitleChange("Airbnb your home!"), dispatch(handleInfoChange("")))
    }
  }  

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
      }, []);

    return ( 
        <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div
            // onClick={() => {dispatch(handleAuthChange(!isOpen)), dispatch(handleTitleChange("Airbnb your home!"))}}
            onClick={regHome}
            className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          >
            Airbnb your home
          </div>
          <div
            onClick={toggleOpen}
            className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row 
            items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          >
            <AiOutlineMenu />
            <div className="hidden md:block"></div>
            <div>
              <Avatar />
            </div>
          </div>
        </div>
  
        {isOpen1 && (
          <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm" onClick={toggleOpen}>
            <div className="flex flex-col cursor-pointer">
              <>
              <UserMenu1/>
                {/* <MenuItem onClick=  { () => {dispatch(handleAuthChange(!isOpen)), dispatch(handleTitleChange("Login"))}} label="Login" />
                <MenuItem onClick={() => {dispatch(handleAuthChange(!isOpen)), dispatch(handleTitleChange("Register"))}} label="Sign Up" /> */}
              </>
            </div>
          </div>
        )}
      </div>
    );
}

export default UserMenu