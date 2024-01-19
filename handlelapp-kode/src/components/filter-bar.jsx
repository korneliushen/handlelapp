'use client'
import FilterDropdown from "./filter-dropdown"

export default function FilterBar({ search, getProductsSearch, setQ }) {


    return (
        <>
            <main className=" rounded-full flex flex-col ">
                <form onSubmit={(e) => getProductsSearch(e)}>
                    <input defaultValue={search} onChange={(e) => setQ(e.target.value)} placeholder="søk…" className=" text-black p-3 w-80 bg-white h-5/6 rounded-full">

                    </input>
                </form>
            </main>
        </>
    )
}