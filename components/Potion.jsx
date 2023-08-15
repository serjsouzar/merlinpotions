import Image from 'next/image'
import React from 'react'

const Potion = ({potionName, potionImage}) => {
  return (
    <div>
      {potionName}
      <Image width={180} height={180} alt={potionName} src={potionImage} />
    </div>
  )
}

export default Potion