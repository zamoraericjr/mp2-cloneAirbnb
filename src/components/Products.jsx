import { useSelector } from 'react-redux'
import Container from './Container'
import React from 'react'
import ListingCard from './listings/ListingCard'


function Products() {
  const {list, filter} = useSelector(state => state)
  const lest = JSON.parse(localStorage.getItem('products')) || [];
  const logged = JSON.parse(localStorage.getItem('logged')) || [];

const filtered = lest.filter(item => item.cat == filter);
const userList = lest.filter(item => item.account == logged);

  // return (
  //   <Container>
  //   <div
  //     className="
  //     mt-10
  //     grid 
  //     grid-cols-1 
  //     sm:grid-cols-2 
  //     md:grid-cols-3 
  //     lg:grid-cols-4
  //     xl:grid-cols-5
  //     2xl:grid-cols-6
  //     gap-8
  //   "
  //   >
  //     {list.map((item) => 
  //     (
  //       <ListingCard 
  //         // key={item.label}
  //         // label={item.label}
  //       //   icon={item.icon}
  //       //   selected={category === item.label}
  //       id={item.id}
  //       lCat={item.cat}   
  //       lLoc={item.loc}
  //       lImg={item.img}
  //       lPrice={item.listPrice}
  //       lFilter = {filterCat}
  //       />
  //     ))}
  //   </div>
  //   </Container>
  // )


  if(filter==""){
    return (
      <Container>
      <div
        className="
        mt-10
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      "
      >
        {lest.map((item) => 
        (
          <ListingCard 
            key={item.id}
            // label={item.label}
          //   icon={item.icon}
          //   selected={category === item.label}
          id={item.id}
          lCat={item.cat}   
          lLoc={item.loc}
          lImg={item.img}
          lPrice={item.listPrice}
          lAcct={item.account}
  
  
          />
        ))}
      </div>
  
      </Container>
    )
  }
  else{
    if(filter=="user"){
      return (
        <Container>
        <div
          className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
        >
  
  {userList.map((item) => 
          (
            <ListingCard 
              key={item.id}
              // label={item.label}
            //   icon={item.icon}
            //   selected={category === item.label}
            id={item.id}
            lCat={item.cat}   
            lLoc={item.loc}
            lImg={item.img}
            lPrice={item.listPrice}
            lAcct={item.account}
    
            />
          ))}
        </div>
    
        </Container>
      )
    }
    else{
      return (
        <Container>
        <div
          className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
        >
  
  {filtered.map((item) => 
          (
            <ListingCard 
              key={item.id}
              // label={item.label}
            //   icon={item.icon}
            //   selected={category === item.label}
            id={item.id}
            lCat={item.cat}   
            lLoc={item.loc}
            lImg={item.img}
            lPrice={item.listPrice}
            lAcct={item.account}
    
            />
          ))}
        </div>
    
        </Container>
      )
    }

  }

}

export default Products