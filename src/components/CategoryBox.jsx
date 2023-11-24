import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleFilterChange } from '../redux/auth';

function CategoryBox({label}) {

  const {filter} = useSelector(state => state)
  const dispatch = useDispatch()

  if(filter==label){
    return ( 
      <div
        onClick={()=>{dispatch(handleFilterChange(""))}}
        className={`
          flex 
          flex-col 
          items-center 
          justify-center 
          gap-2
          p-3
          border-b-2
          hover:text-neutral-800
          transition
          cursor-pointer
         
        `}
      >
        {/* <Icon size={26} /> */}
        <div className={"font-medium text-lg"}>
          {label}
        </div>
      </div>
     );
  }
  else{
    return ( 
      <div
      onClick={()=>{dispatch(handleFilterChange(label))}}
        className={`
          flex 
          flex-col 
          items-center 
          justify-center 
          gap-2
          p-3
          border-b-2
          hover:text-neutral-800
          transition
          cursor-pointer
         
        `}
      >
        {/* <Icon size={26} /> */}
        <div className={"font-small text-sm"}>
          {label}
        </div>
      </div>
     );
  }

}

export default CategoryBox