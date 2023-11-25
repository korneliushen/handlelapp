import Image from 'next/image'
import FilterBar from '../components/filter-bar'
import ProductCard from '../components/product-card'
import ArrowsPages from '@/components/arrows-pages'
import { RiContactsBookUploadFill } from 'react-icons/ri'
import Front from './front'

// Henter data for å få info som enkelt produkt, pris, navn, bilde, url, osv. og hvor mange som skal vises og sidenummer
let pageNumber= 1
async function getProducts() {
  const res = await fetch(`https://kassal.app/api/v1/products?size=${10}&page=${pageNumber}`,{
      headers: { authorization:  'Bearer ow52tFar21lou9OIplcp5U6UtOwiY3RR9xk1Bc4P'},
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


async function getProductsCompare() {
  const compare_res = await fetch(`https://kassal.app/api/v1/products/find-by-url/compare?url=${url}`,{
      method: 'GET',
      headers: { authorization:  'Bearer ow52tFar21lou9OIplcp5U6UtOwiY3RR9xk1Bc4P'},
  })
  return compare_res.json()
}
const compare_res = await getProductsCompare()
const prices = []

console.log(compare_res)
for (let i = 0; i < compare_res.data.products.length; i++) {
  prices.push(compare_res.data.products[i].current_price)
}
let sortedPrices = prices
.filter((price) => price)
.sort((a, b) => a.price - b.price);
let smallestNumber = 100
for (let i = 0; i < sortedPrices.length; i++) {
  if (sortedPrices[i].price <= smallestNumber) {
      smallestNumber = sortedPrices[i].price
  }
}
sortedPrices.shift()

if (productName.length > 31) {
  productName = productName.substring(0, 31) + "..."
}
if (productVendor.length > 16) {
  productVendor = productVendor.substring(0, 16) + "..."
}


export default async function Home() {
  return <Front data={data} smallestNumber={smallestNumber} sortedPrices={sortedPrices} compare_res={compare_res} />
}