import Image from 'next/image'
import FilterBar from '../components/filter-bar'
import ProductCard from '../components/product-card'
import ArrowsPages from '@/components/arrows-pages'
import { RiContactsBookUploadFill } from 'react-icons/ri'

let pageNumber= 1
async function getProducts() {
  const res = await fetch(`https://kassal.app/api/v1/products?size=${20}&page=${pageNumber}`,{
      headers: { authorization:  'Bearer ow52tFar21lou9OIplcp5U6UtOwiY3RR9xk1Bc4P'},
  })
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}
const data = await getProducts()
console.log(data.data) 



export default async function Home() {
  return (
    <>
      <main className='w-screen flex flex-col items-center  justify-center'>
          <section className='w-[94%]'>
            <h1 className='text-5xl text-black'>Dagligvarer</h1>
          </section>
          <FilterBar />
          <ul className='gap-x-4 gap-y-4 grid grid-cols-1 w-[85%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 items-center mt-6 overflow-hidden '>
            {data.data.map((product) => {
              return <ProductCard productName={product.name} productVendor={product.vendor} productImage={product.image} storeLogo={product.store.logo} data={data} url={product.url}/> 
            })}
          </ul>
          <ArrowsPages pageNumber={pageNumber} />
      </main>
    </>
  )
}
console.log(data.data[5].name)