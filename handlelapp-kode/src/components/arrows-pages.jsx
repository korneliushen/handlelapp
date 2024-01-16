'use client'
import { GrFormNext } from 'react-icons/gr'
function nextPage(){
    pageNumber + 1
}
function lastPage(){
    pageNumber - 1
}

export default function arrowsPages({ pageNumber }) {
    return (
        <>
        <main className=''>
         <button type='button' className='text-black px-0.5' onClick={nextPage}>
            <GrFormNext className=' text-3xl w-10 h-10 bg-white border-primary border-2 rounded-lg  rotate-180' />
          </button>
          <button type='button' className='text-black px-0.5'>
            <GrFormNext className=' text-3xl w-10 h-10 bg-white border-primary border-2 rounded-lg  ' />
          </button>
        </main>
        </>
    )
}