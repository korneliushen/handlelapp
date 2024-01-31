'use client'
import FilterDropdown from "./filter-dropdown"
import LoginButton from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'
import { Suspense } from "react"
import { RiSearchLine } from "react-icons/ri";



export default function FilterBar({ search, getProductsSearch, setQ }) {


    return (
        <>
            <main className="w-full rounded-full flex items-center justify-between space-x-4 ">
                <section className="flex items-center space-x-3">
                    <form onSubmit={(e) => getProductsSearch(e)}>
                        <input defaultValue={search} onChange={(e) => setQ(e.target.value)} placeholder="søk…" className=" outline-primary text-black p-3 w-full md:w-80 bg-white h-5/6 rounded-lg">

                        </input>
                    </form>
                    <Button onClick={getProductsSearch}>
                        <RiSearchLine className="text-xl" />
                    </Button>
                </section>
                <LoginButton>
                    <Button>Login</Button>
                </LoginButton>
            </main >
        </>
    )
}