import React from 'react'
import { useDispatch } from 'react-redux'
import { handleEmailChange, handleNameChange, handlePwChange } from '../../redux/auth'

function Input({Plceholder, label, type}) {

  const dispatch = useDispatch()

  function handleInputChange(e) {
if(label=="Email"){
  dispatch(handleEmailChange(e.target.value))
}
else if(label=="Name"){
  dispatch(handleNameChange(e.target.value))
}
else if(label=="Password"){
  dispatch(handlePwChange(e.target.value))
}

}
  return (
    <input
    // id={id}
    // disabled={disabled}
    // {...register(id, { required })}
    placeholder = {Plceholder}
    onChange={handleInputChange}
    type={type}
    className={`
    peer
    w-full
    p-4
    pt-6 
    font-light 
    bg-white 
    border-2
    rounded-md
    outline-none
    transition
    disabled:opacity-70
    disabled:cursor-not-allowed
    `}
/>
  )
}

export default Input