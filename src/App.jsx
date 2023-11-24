import React from 'react'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'
import {useDispatch, useSelector } from 'react-redux';
import Products from './components/Products';
import './index.css';
import { handleLoggedChange } from './redux/auth';


function App() {

  //clear products
  // const lest = JSON.parse(localStorage.getItem('products')) || [];
  // const delList = lest.filter((products) => products.id === "random")
  // localStorage.setItem('products', JSON.stringify(delList))

  //clear users
  // const usrs = JSON.parse(localStorage.getItem('users')) || [];
  // const usrsLst = usrs.filter((users) => users.id === "random")
  // localStorage.setItem('users', JSON.stringify(usrsLst))
  // localStorage.setItem('logged', JSON.stringify(""))


  const {isOpen} = useSelector(state => state)

  return (
    <>
    <Modal actionLabel={"Submit"} title={"Hello World"} isOpen = {isOpen}/>

    <Navbar />

    <div className="pb-20 pt-28">
    <Products/> 
        </div>
      

    </>
    
    
  )
}

export default App