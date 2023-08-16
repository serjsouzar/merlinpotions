import Image from 'next/image'
import React from 'react'

const Potion = ({potionName, potionImage,potionPrice}) => {
  return (
    <div className="potion_card">
      <Image className="potion_image" width={180} height={180} alt={potionName} src={potionImage} />
      <div className='potion_name'>
      <h3>{potionName}</h3>
      -
      <p>{potionPrice}</p>
      </div>
    </div>
  )
}

export default Potion