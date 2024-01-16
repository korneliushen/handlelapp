"use server"
import Front from './front'
import { Suspense } from 'react'

// Henter data for å få info som enkelt produkt, pris, navn, bilde, url, osv. og hvor mange som skal vises og sidenummer
let pageNumber = 220
async function getProducts() {
  const res = await fetch(`https://kassal.app/api/v1/products?size=${20}&page=${pageNumber}`,{
      headers: { authorization:  process.env.API_KEY},
  })
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}
const data = await getProducts()

let url = ''
let productName = ''
let productVendor = ''
let productImage = ''
let storeLogo = ''

{data.data.map((product) => {
  return url = product.url, productName = product.name, productVendor = product.vendor, productImage = product.image, storeLogo = product.store.logo
})}




const API_KEY = process.env.API_KEY





export default async function Home() {
  
  const ownData = [data];
  for (let i = 0; i < ownData[0].data.length; i++) {
    ownData[0].data[i] = {
      ...ownData[0].data[i],
    };
  }


  return (

  <Suspense fallback={<div>Loading…</div>}>
    <Front ownData={ownData} data={data} API_KEY={API_KEY} />
  </Suspense>
)}
