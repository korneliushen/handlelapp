import Image from 'next/image'
import FilterBar from '../components/filter-bar'
import ProductCard from '../components/product-card'
import ProductGridAir from '../components/product-grid-air'

export default function Home() {
  return (
    <>
      <main className='w-screen h-screen flex flex-col items-center'>
        <div className=' flex flex-col w-full items-center gap-8 mt-5 '>
          <section className='w-[94%]'>
            <h1 className='text-5xl text-black'>Dagligvarer</h1>
          </section>
          <FilterBar />
        </div>
        <section className=' flex h-full w-[90%] justify-center mt-6'>
          <ProductCard />
          <ProductGridAir />
          <ProductCard />
          <ProductGridAir />
          <ProductCard />
          <ProductGridAir />
          <ProductCard />
        </section>
      </main>
    </>

  )
}