import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleImgChange } from '../../redux/auth';


function ListingImg({imgLoc}) {

    const {img} = useSelector(state => state)
    const dispatch = useDispatch()

    if(img == imgLoc){
        return (
            <div 
               onClick={() => dispatch(handleImgChange('../../src/assets/images/arctic.jpg'))} 
              className="col-span-1 cursor-pointer group"
              
            >
              <div className="flex flex-col gap-2 w-full">
    
                <div 
                  className="
                    aspect-square 
                    w-full 
                    relative 
                    overflow-hidden 
                    rounded-xl
                    border-2
                    border-black
                  "
                >
                  <img
                    className="
                      object-cover 
                      h-full 
                      w-full 
                      group-hover:scale-110 
                      transition
                    "
                    src={imgLoc}
                    alt="Listing"
                  />
            
                </div>
        
                {/* {onAction && actionLabel && (
                //   <Button
                //     disabled={disabled}
                //     small
                //     label={actionLabel} 
                //     onClick={handleCancel}
                //   />
                )} */}
              </div>
            </div>
           );
    }
    else{
        return (
            <div 
            onClick={() => dispatch(handleImgChange(imgLoc))} 
              className="col-span-1 cursor-pointer group"
              
            >
              <div className="flex flex-col gap-2 w-full">
    
                <div 
                  className="
                    aspect-square 
                    w-full 
                    relative 
                    overflow-hidden 
                    rounded-xl
                  "
                >
                  <img
                    className="
                      object-cover 
                      h-full 
                      w-full 
                      group-hover:scale-110 
                      transition
                    "
                    src={imgLoc}
                    alt="Listing"
                  />
            
                </div>
        
                {/* {onAction && actionLabel && (
                //   <Button
                //     disabled={disabled}
                //     small
                //     label={actionLabel} 
                //     onClick={handleCancel}
                //   />
                )} */}
              </div>
            </div>
           );
    }

}

export default ListingImg