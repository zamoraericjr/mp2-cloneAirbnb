import React from 'react'
import ListingImg from './listings/ListingImg'
import Container from './Container'

export const listImages = [
    {
      id:'01',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/arctic.jpg'
      },
      {
        id:'02',
        label: 'Barns',
      //   icon: IoDiamond,
      imgLoc: '../../src/assets/images/barns.jpeg'
      },
      {
        id:'03',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/beach.jpg'
      },
      {
        id:'04',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/camping.jpg'
      },
      {
        id:'05',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/castle.jpg'
      },
      {
        id:'06',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/cave.jpg'
      },
      {
        id:'07',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/countryside.jpg'
      },
      {
        id:'08',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/desert.jpg'
      },
      {
        id:'09',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/island.jpg'
      },
      {
        id:'10',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/lakes.jpg'
      },
      {
        id:'11',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/lux.jpg'
      },
      {
        id:'12',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/modern.jpg'
      },
      {
        id:'13',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/pools.jpg'
      },
      {
        id:'14',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/skiing.jpg'
      },
      {
        id:'15',
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/windmill.jpg'
      },
      
]

function Images({}) {
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
      {listImages.map((item) => (
        <ListingImg 
          key={item.id}
          // label={item.label}
        //   icon={item.icon}
        //   selected={category === item.label}
           imgLoc={item.imgLoc}
        />
      ))}
    </div>

    </Container>
  )
}

export default Images