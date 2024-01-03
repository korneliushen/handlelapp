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


async function GetProductsCompare() {
  const compare_res = await fetch(`https://kassal.app/api/v1/products/find-by-url/compare?url=${url}`,{
      method: 'GET',
      headers: { authorization:  process.env.API_KEY},
  })
  return compare_res.json()
}
const compare_res = await GetProductsCompare()




export default async function Home() {
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
  console.log(compare_res.data.products)

  // Fjerner den laveste prisen fra arrayet

  sortedPrices.shift()

  
  
  const ownData = [data];
  for (let i = 0; i < ownData[0].data.length; i++) {
    ownData[0].data[i] = {
      ...ownData[0].data[i],
      smallestNum: smallestNumber,
      sortedPrices: sortedPrices,
    };
  }

  console.log(url)

  return (

  <Suspense fallback={<div>Loading…</div>}>
    <Front ownData={ownData} data={data} smallestNumber={smallestNumber} sortedPrices={sortedPrices} compare_res={compare_res} />
  </Suspense>
)}
