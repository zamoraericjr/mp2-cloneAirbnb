import React, { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { handleAuthChange, handleCatChange, handleImgChange, handlePriceChange, handleRegHomeChange, handleTitleChange, handleErrorChange, handleInfoChange } from '../../redux/auth';
import AuthBody from './AuthBody';
import AuthFooter from './AuthFooter';


function Modal ({

  onSubmit,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) {
  const {isOpen, title} = useSelector(state => state)
  const [showModal, setShowModal] = useState(isOpen);
  
  const dispatch = useDispatch()

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);


  // function close(){

  //   setShowModal(false);

  //   setTimeout(() => {

  //     dispatch(handleAuthChange(!isOpen))

  //   }, 300);
 
  // }

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {

  
    return null;
   
  }

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
          "
        >
          {/*content*/}
          <div className={`
            translate
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
              {/*header*/}
              <div className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                  onClick={()=>{dispatch(handleAuthChange(!isOpen)), 
                    dispatch(handleTitleChange(""))
                    dispatch(handleRegHomeChange("category"))
                    dispatch(handleCatChange("Beach"))
                    dispatch(handleImgChange("../../src/assets/images/arctic.jpg"))
                    dispatch(handlePriceChange("Php 0.00"))
                    dispatch(handleErrorChange(""))
                    dispatch(handleInfoChange(""))
                  }}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">
                  {title}
                </div>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
              <AuthBody/>
              </div>
              {/*footer*/}

              <div>
              <AuthFooter/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
