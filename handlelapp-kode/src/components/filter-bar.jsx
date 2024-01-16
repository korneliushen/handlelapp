'use client'
import FilterDropdown from "./filter-dropdown"

export default function FilterBar({search, getProductsSearch, setQ }) {
    
    
    return (
        <>
            <main className=" bg-[#24516A] w-11/12 h-16 rounded-full flex flex-col items-center justify-center">
                <div className="w-[96%] h-12 flex flex-row items-center">
                    <section className="">
                        <p className="text-xl"></p>
                    </section>
                    <div className="air w-8 h-full"></div>
                    <section className="flex justify-start w-full h-5/6 items-center">
                        <div className="flex w-3/4">
                        </div>
                    </section>
                    <form onSubmit={(e) => getProductsSearch(e)}>
                        <input defaultValue={search} onChange={(e) => setQ(e.target.value)} placeholder="søk…" className=" text-black p-3 w-80 bg-white h-5/6 rounded-full">

                        </input>
                    </form>
                </div>
            </main>
        </>
    )
}