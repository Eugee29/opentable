import { PRICE } from '@prisma/client'
import React from 'react'

interface Props {
  price: PRICE
  className?: string
}

export default function Price({ price, className = '' }: Props) {
  const renderPrice = () => {
    if (price === PRICE.CHEAP)
      return (
        <>
          <span>$$</span>
          <span className="text-gray-400">$$</span>
        </>
      )
    else if (price === PRICE.REGULAR)
      return (
        <>
          <span>$$$</span>
          <span className="text-gray-400">$</span>
        </>
      )
    else
      return (
        <>
          <span>$$$$</span>
        </>
      )
  }

  return <span className={className}>{renderPrice()}</span>
}
