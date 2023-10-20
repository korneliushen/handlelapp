import Image from 'next/image'
import FilterBar from '../components/filter-bar'
import ProductCard from '../components/product-card'
import ProductGridAir from '../components/product-grid-air'
import { headers } from "next/headers"

export default function Home() {
  const headersInstance = headers()

    async function getProducts() {
        const res = await fetch('https://kassal.app/api/v1/products',{
            headers: { authorization:  'Bearer ow52tFar21lou9OIplcp5U6UtOwiY3RR9xk1Bc4P'},
        })
        const products = await res.json()
        console.log(products)
        return products
    }
    const products = getProducts()
    console.log(products.data)
  return (
    <>
      <main className='w-screen h-screen flex flex-col items-center'>
        <div className=' flex flex-col w-full items-center gap-8 mt-5 '>
          <section className='w-[94%]'>
            <h1 className='text-5xl text-black'>Dagligvarer</h1>
          </section>
          <FilterBar />
        </div>
        <section className=' flex gap-2 gap-y-5 flex-wrap  w-[91.9%] justify-center lg:justify-start items-center mt-6 '>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </main>
    </>

  )
}