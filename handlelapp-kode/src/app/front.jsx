'use client'
import Image from 'next/image'
import FilterBar from '../components/filter-bar'
import ProductCard from '../components/product-card'
import ArrowsPages from '@/components/arrows-pages'
import { RiContactsBookUploadFill } from 'react-icons/ri'





export default function Home({data, pageNumber, smallestNumber,sortedPrices, compare_res}) {
  return (
    <>
      <main className='w-screen flex flex-col items-center  justify-center'>
          <section className='w-[94%]'>
            <h1 className='text-5xl text-black'>Dagligvarer</h1>
          </section>
          <FilterBar />
          <ul className='gap-x-4 gap-y-4 grid grid-cols-1 w-[85%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 items-center mt-6 overflow-hidden '>
            {data.data.map((product) => {
              return <ProductCard productName={product.name} productVendor={product.vendor} productImage={product.image} storeLogo={product.store.logo} data={data} url={product.url} smallestNumber={smallestNumber} sortedPrices={sortedPrices} compare_res={compare_res}/> 
            })}
          </ul>
          <ArrowsPages pageNumber={pageNumber} />
      </main>
    </>
  )
}
