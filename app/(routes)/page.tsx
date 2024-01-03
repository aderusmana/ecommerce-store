import getBillboard from '@/actions/getBillboard';
import getProducts from '@/actions/getProducts';
import Billboard from '@/components/billboard'
import ProductList from '@/components/productList';
import Container from '@/components/ui/container';
import React from 'react'

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({isFeatured:true})
  const billboards = await getBillboard("30ddfcfe-13f0-4e25-bd55-fae36deca13c")
  return (
   <Container>
     <div className='space-y-10 pb-10'>
      <Billboard data={billboards} />
    <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold'>Featured Products</h1>
        <ProductList title='' items={products} />
    </div>
    </div>
   </Container>
  )
}

export default HomePage