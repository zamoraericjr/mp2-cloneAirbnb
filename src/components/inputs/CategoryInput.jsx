import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleCatChange } from '../../redux/auth';


function CategoryInput({label}) {

  const {category} = useSelector(state => state)
  const dispatch = useDispatch()

  if(category===label){
    return ( 
      <div
      onClick={() => {dispatch(handleCatChange('Beach'))}}
        className={`
          rounded-xl
          border-2
          p-4
          flex
          flex-col
          gap-3
          border-black
          transition
          cursor-pointer
  
        `}
      >
        {/* <Icon size={30} /> */}
        <div className="font-semibold">
          {label}
        </div>
      </div>
     );
  }
  else{
    return ( 
      <div
      onClick={() => {dispatch(handleCatChange(label))}}
        className={`
          rounded-xl
          border-2
          p-4
          flex
          flex-col
          gap-3
         
          transition
          cursor-pointer
  
        `}
      >
        {/* <Icon size={30} /> */}
        <div className="font-semibold">
          {label}
        </div>
      </div>
     );
  }


}

export default CategoryInput