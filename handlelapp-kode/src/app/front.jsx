'use client'
import Image from 'next/image'
import FilterBar from '../components/filter-bar'
import ProductCard from '../components/product-card'
import ArrowsPages from '@/components/arrows-pages'
import { RiContactsBookUploadFill } from 'react-icons/ri'
import { useState } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"





export default function Home({ data, pageNumber, compare_res}) {
  const prices = []
  // Samler prisene fra produktene i et array
  for (let i = 0; i < compare_res.data.products.length; i++) {
    prices.push(compare_res.data.products[i].current_price)
  }
  let sortedPrices = prices
  .filter((price) => price)
  .sort((a, b) => a.price - b.price);

  // Finner den laveste prisen
  let smallestNumber = 100
  for (let i = 0; i < sortedPrices.length; i++) {
    if (sortedPrices[i].price <= smallestNumber) {
        smallestNumber = sortedPrices[i].price
    }
  }

  // Fjerner den laveste prisen fra arrayet

  sortedPrices.shift()

  
  
  const [ownData, setOwnData] = useState([data]);
  for (let i = 0; i < ownData[0].data.length; i++) {
    ownData[0].data[i] = {
      ...ownData[0].data[i],
      smallestNum: smallestNumber,
      sortedPrices: sortedPrices,
    };
  }

  const [q, setQ] = useState('')
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const search = searchParams.get('search')
    
    async function getProductsSearch(e) {
        e.preventDefault()
        const params = new URLSearchParams(searchParams)
        if (q) {
            await params.set('search', q)
        } else {
            params.delete('search')
        }
        replace(`${pathname}?${params.toString()}`);
            const res = await fetch(`https://kassal.app/api/v1/products?search=${q}`,{
                headers: { authorization:  'Bearer ow52tFar21lou9OIplcp5U6UtOwiY3RR9xk1Bc4P',
                'Content-Type': 'application/json',},
            })
            if (res.status === 200) {
                const data = await res.json()
                setOwnData([data])
                console.log(data)
            } else {
                console.log('error')
            }

    }
  return (
    <>
      <main className='w-screen flex flex-col items-center  justify-center'>
          <section className='w-[94%]'>
            <h1 className='text-5xl my-3 text-black'>Dagligvarer</h1>
          </section>
          <FilterBar getProductsSearch={getProductsSearch} setQ={setQ} search={search} />
          <ul className='gap-x-4 gap-y-4 grid grid-cols-1 w-[85%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 items-center mt-6 overflow-hidden '>
            {ownData[0].data.map((product, i) => {
              return <ProductCard key={i} productName={product.name} storeLogo={product.store.logo} productVendor={product.vendor} productImage={product.image}  data={data} url={product.url} smallestNumber={product.smallestNum} sortedPrices={sortedPrices} compare_res={compare_res}/> 
            })}
          </ul>
          <ArrowsPages pageNumber={pageNumber} />
          
      </main>
    </>
  )
}
