import Image from 'next/image'
import FilterBar from '../components/filter-bar'
import ProductCard from '../components/product-card'


async function getProducts() {
  const res = await fetch('https://kassal.app/api/v1/products',{
      headers: { authorization:  'Bearer ow52tFar21lou9OIplcp5U6UtOwiY3RR9xk1Bc4P'},
  })
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}
const data = await getProducts()
async function getProductsCompare() {
  const compare_res = await fetch(`https://kassal.app/api/v1/products/find-by-url/compare?url=${data.data[0].url}`,{
      method: 'GET',
      headers: { authorization:  'Bearer ow52tFar21lou9OIplcp5U6UtOwiY3RR9xk1Bc4P'},
  })
  return compare_res.json()
}
const dataCompare = await getProductsCompare()

// const productName = dataCompare.products.map((product) => {
//   return product.name
// })

export default async function Home() {

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

          {data.data.map((product) => {
            return <ProductCard productName={product.name} productVendor={product.vendor} productPrice={product.current_price} productImage={product.image} storeLogo={product.store.logo} firstStorePrice={dataCompare.data.products[3].current_price.price} />
          })}
        </section>
      </main>
    </>
  )
}