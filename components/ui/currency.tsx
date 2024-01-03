'use client'
import React, { useEffect, useState } from 'react'

const formatter  = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })

interface CurrencyProps {
  value: number
}




const Currency: React.FC<CurrencyProps> = ({value}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  
  }, [])

  if(!mounted){
    return null
  }

  return (
    <div className='font-semibold'>{formatter.format(Number(value))}</div>
  )
}

export default Currency