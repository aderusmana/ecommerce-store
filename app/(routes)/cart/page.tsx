"use client"
import Container from '@/components/ui/container'
import UseCart from '@/hooks/useCart'
import React, { useEffect, useState } from 'react'
import CartItems from './components/cartItems'
import Summary from './components/summary'

const CartPage = () => {
    const [isMounted, setIsMounted] =useState(false)
    const cart = UseCart();

    useEffect(() => {
        setIsMounted(true)
    },[])

    if(isMounted) return null

  return (
    <div className='bg-white'>
        <Container>
            <h1 className="text-4xl font-bold text-left px-4 py-16 sm:px-6 lg:px-8 ">Your cart </h1>
            <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
                <div className='lg:col-span-7'>
                    {cart.items.length === 0 && <p className='text-neutral-500 flex justify-center'> No Items in Cart</p> }
                    <ul>
                        {cart.items.map((item) => (
                            <CartItems key={item.id} data={item} />
                        ))}
                    </ul>

                </div>
                <Summary />

            </div>

        </Container>
    </div>
  )
}

export default CartPage