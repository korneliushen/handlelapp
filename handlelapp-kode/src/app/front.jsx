'use client'
import Image from 'next/image'
import FilterBar from '../components/ui/filter-bar'
import ProductCard from '@/components/ui/product-card'
import ArrowsPages from '@/components/ui/arrows-pages'
import { RiContactsBookUploadFill } from 'react-icons/ri'
import { useState } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"





export default function Home({ data, API_KEY}) {
  
  
  const [ownData, setOwnData] = useState([data]);
  for (let i = 0; i < ownData[0].data.length; i++) {
    ownData[0].data[i] = {
      ...ownData[0].data[i],
    };
  }

  const searchParams = useSearchParams()
  const [q, setQ] = useState(searchParams.get('search') || '')
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
                headers: { authorization:  API_KEY,
                'Content-Type': 'application/json',},
            })
            if (res.status === 200) {
                const data = await res.json()
                setOwnData([data])
                console.log(data)
    }
    }
  return (
    <>
      <main className='w-screen flex flex-col items-center  justify-center'>
          <section className='w-[94%]'>
            <h1 className='text-5xl my-3 text-black'>Dagligvarer</h1>
          </section>
          <Button>Hei</Button>
          <FilterBar getProductsSearch={getProductsSearch} setQ={setQ} search={search} />
          <ul className='gap-x-4 gap-y-4 grid grid-cols-1 w-[85%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center mt-6 overflow-hidden '>
            {ownData[0].data.map((product, i) => {
              return <ProductCard key={i} productName={product.name} storeLogo={product.store.logo} productVendor={product.vendor} productImage={product.image} price={product.current_price}  data={data} url={product.url} /> 
            })}
          </ul>
          <ArrowsPages />
      </main>
    </>
  )
}
