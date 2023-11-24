import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Input from '../inputs/Input';
import Heading from '../Heading';
import CategoryInput from '../inputs/CategoryInput';
import { categories } from '../navbar/Categories';
import Map from '../Map';
import Counter from '../inputs/Counter';
import { handleAuthChange, handleCatChange, handleErrorChange, handleFilterChange, handleImgChange, handleInfoChange, handleListChange, handlePriceChange, handleRegHomeChange, handleTitleChange } from '../../redux/auth';
import InputPrice from '../inputs/InputPrice';
import Images from '../Images';
import Button from '../Button';

function AuthBody({}) {

    const {isOpen, title, regHome, error, editInfo} = useSelector(state => state)
    const dispatch = useDispatch()

    const lest = JSON.parse(localStorage.getItem('products')) || [];

    const delList = lest.filter((products) => products.id !== editInfo)

    function del(){

      localStorage.setItem('products', JSON.stringify(delList))
      dispatch(handleAuthChange(!isOpen))
      dispatch(handleTitleChange(""))
      dispatch(handleRegHomeChange("category"))
      dispatch(handleCatChange("Beach"))
      dispatch(handleImgChange("../../src/assets/images/arctic.jpg"))
      dispatch(handlePriceChange("Php 0.00"))
      dispatch(handleFilterChange(""))
      dispatch(handleErrorChange(""))
      dispatch(handleInfoChange(""))
    }

    if(title=="Register"){
        return (
      
            <div className="flex flex-col gap-4">

<Heading
        Title={"Welcome to Airbnb"}
        subtitle={"Create an account!"}
      />

<Input
Plceholder="Email"
        id="email"
        label="Email"
        
        // disabled={isLoading}
        // register={register}
        // errors={errors}
        // required
      />
      <Input
       Plceholder="Name"
        id="name"
        label="Name"
       
        // disabled={isLoading}
        // register={register}
        // errors={errors}
        // required
      />
      <Input
       Plceholder="Password"
        id="password"
        label="Password"
        type="Password"
       
        // disabled={isLoading}
        // register={register}
        // errors={errors}
        // required
      />
      
      <label 
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
        `}
      > </label>
                

            </div>
    
          )
    }
    else if(title=="Login") {
        return(
            <div className="flex flex-col gap-4">
            <Heading
              Title="Welcome back"
              subtitle="Login to your account!"
            />
            <Input
              id="email"
              label="Email"
              Plceholder="Email"
              type="email"
              // disabled={isLoading}
              // register={register}  
              // errors={errors}
              // required
            />
            <Input
              id="password"
              label="Password"
              type="password"
              Plceholder="Password"
              // disabled={isLoading}
              // register={register}
              // errors={errors}
              // required
            />
            <h4 >{error}</h4>

          </div>
        )
  
    }
    else if(title=="Airbnb your home!"){
      if(regHome=="category"){

        return(
          <div className="flex flex-col gap-8">
          <Heading
            Title="Which of these best describes your place?"
            subtitle="Pick a category"
          />
          <div 
            className="
              grid 
              grid-cols-1 
              md:grid-cols-2 
              gap-3
              max-h-[50vh]
              overflow-y-auto
            "
          >
            {categories.map((item) => (
              <div key={item.label} className="col-span-1">
                <CategoryInput
                  // onClick={(category) => 
                  //   setCustomValue('category', category)}
                  // selected={category === item.label}
            
                  label={item.label}
                  // icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
  
        )
      }
      else if(regHome=="location"){
        return(
          <div className="flex flex-col gap-8">
          <Heading
            Title="Where is your place located?"
            subtitle="Help guests find you!"
          />
          {/* <CountrySelect 
            value={location} 
            onChange={(value) => setCustomValue('location', value)} 
          /> */}
          <Map/>
        </div>
        )
     
      }
      // else if(regHome=="info"){
      //   return(
      //     <div className="flex flex-col gap-8">
      //     <Heading
      //       Title="Share some basics about your place"
      //       subtitle="What amenitis do you have?"
      //     />
      //     <Counter 
      //       // onChange={(value) => setCustomValue('guestCount', value)}
      //       // value={guestCount}
      //       title="Guests" 
      //       subtitle="How many guests do you allow?"
      //     />
      //     <hr />
      //     <Counter 
      //       // onChange={(value) => setCustomValue('roomCount', value)}
      //       // value={roomCount}
      //       title="Rooms" 
      //       subtitle="How many rooms do you have?"
      //     />
      //     <hr />
      //     <Counter 
      //       // onChange={(value) => setCustomValue('bathroomCount', value)}
      //       // value={bathroomCount}
      //       title="Bathrooms" 
      //       subtitle="How many bathrooms do you have?"
      //     />
      //   </div>
      //   )
      // }
      else if(regHome=="images"){
        return(
          <div className="flex flex-col gap-8">
          <Heading
            Title="Add a photo of your place"
            subtitle="Show guests what your place looks like!"
          />
         <Images/>
        </div>
        )

      }
      // else if(regHome=="description"){
      //   return(
      //     <div className="flex flex-col gap-8">
      //     <Heading
      //       Title="How would you describe your place?"
      //       subtitle="Short and sweet works best!"
      //     />
      //     <Input
      //       id="title"
      //       label="Title"
      //       // disabled={isLoading}
      //       // register={register}
      //       // errors={errors}
      //       // required
      //     />
      //     <hr />
      //     <Input
      //       id="description"
      //       label="Description"
      //       // disabled={isLoading}
      //       // register={register}
      //       // errors={errors}
      //       // required
      //     />
      //   </div>
      //   )

      // }
      else if(regHome=="price"){
        return(
          <div className="flex flex-col gap-8">
          <Heading
            Title="Now, set your price"
            subtitle="How much do you charge per night?"
          />
          <InputPrice
            id="price"
            label="Price"
            formatPrice 
            type="number" 
            Plceholder = "Enter Price"
            
            // disabled={isLoading}
            // register={register}
            // errors={errors}
            // required
          />
        </div>
        )

      }

   
    }
    else if(title=="Your listing"){
      return(
        <div className="flex flex-col gap-4">
        <Heading
         Title="This is your listing"
         subtitle="What do you want to do with this listing?"
       />
   
        <Button 
                 label={"Open"} 
                 // onClick={()=>logPw === "" ? {login0}:{login1}}
                //  onClick={login1}
                 // onClick={login0}
               />
      <Button 
                 label={"Edit"} 
                 onClick={()=> {dispatch(handleTitleChange("Airbnb your home!"))}}
               
               />
   
   <Button 
   
                 label={"Delete"} 
                 onClick={del}                 
                //  onClick={login1}
                 // onClick={login0}
               />
         </div>
    
      )
    }
    else if(title=="Listing"){
      return(
<div className="flex flex-col gap-4">

<Button 
         label={"Show availability"} 
         // onClick={()=>logPw === "" ? {login0}:{login1}}
        //  onClick={login1}
         // onClick={login0}
       />
<Button 
         label={"Book"} 
         // onClick={()=>logPw === "" ? {login0}:{login1}}
        //  onClick={login1}
         // onClick={login0}
       />

 </div>
      )

    }
}

export default AuthBody