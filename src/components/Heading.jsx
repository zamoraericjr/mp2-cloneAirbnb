import React from 'react'

function Heading({Title, subtitle}) {
  return (
    <div className={'text-start'}>
    <div className="text-2xl font-bold">
      {Title}
    </div>
    <div className="font-light text-neutral-500 mt-2">
      {subtitle}
    </div>
  </div>
  )
}

export default Heading