import FilterDropdown from "./filter-dropdown"

export default function FilterBar() {
    return (
        <>
            <main className=" bg-[#24516A] w-11/12 h-16 rounded-full flex flex-col items-center justify-center">
                <div className="w-[96%] h-12 flex flex-row items-center">
                    <section className="">
                        <p className="text-xl">Filter:</p>
                    </section>
                    <div className="air w-8 h-full"></div>
                    <section className="flex justify-start w-full h-5/6 items-center">
                        <div className="flex w-3/4">
                            <FilterDropdown text={"Pris"}/>
                            <FilterDropdown text={"Kategori"}/>
                            <FilterDropdown text={"Butikker"}/>
                        </div>
                    </section>
                    <section className=" w-80 bg-white h-5/6 rounded-full">
                        
                    </section>
                </div>
            </main>
        </>
    )
}