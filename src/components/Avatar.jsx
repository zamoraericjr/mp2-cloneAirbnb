import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleLoggedChange } from '../redux/auth';

function Avatar() {

  const logged1 = JSON.parse(localStorage.getItem('logged')) || [];
  // const dispatch = useDispatch()
  // dispatch(handleLoggedChange(logged1))
  // const {logged} = useSelector(state => state)

  if(logged1==""){
    return ( 
      <img 
    className="rounded-full" 
    height="30" 
    width="30" 
    alt="Avatar" 
    src="../../src/assets/images/placeholder.jpg"

  />
   );
  }
  else{
    return ( 
      <img 
    className="rounded-full" 
    height="30" 
    width="30" 
    alt="Avatar" 
    src="../../src/assets/images/logged.jpg"

  />
   );
  }

}

export default Avatar