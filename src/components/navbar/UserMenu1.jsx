import React from 'react'
import MenuItem from './MenuItem'
import { useDispatch, useSelector } from 'react-redux';
import { handleAuthChange, handleFilterChange, handleLoggedChange, handleTitleChange } from '../../redux/auth';

function UserMenu1({}) {

    const logged = JSON.parse(localStorage.getItem('logged')) || [];
    const dispatch = useDispatch()
    
  const {isOpen, filter} = useSelector(state => state)
  function clickUser (){
    if(filter!== 'user'){
        dispatch(handleFilterChange('user'))
    }
    else{
        dispatch(handleFilterChange(''))
    }
  }

    if(logged == ""){
        return (
            <>
            <MenuItem onClick=  { () => {dispatch(handleAuthChange(!isOpen)), dispatch(handleTitleChange("Login"))}} label="Login" />
            <MenuItem onClick={() => {dispatch(handleAuthChange(!isOpen)), dispatch(handleTitleChange("Register"))}} label="Sign Up" />
            </>
         
          )
    }
    else{
        return(
            <>
            <h3 className="flex 
                items-center 
                p-1
                rounded-t
                justify-center
                relative
                border-b-[1px] 
                text-lg 
                font-semibold"

                onClick={clickUser}
                >
            {logged}
            </h3>
            <MenuItem onClick = { () =>  localStorage.setItem('logged', JSON.stringify(""))} label="Logout" />
            </>
            
        )
          
        
       
    }

}

export default UserMenu1