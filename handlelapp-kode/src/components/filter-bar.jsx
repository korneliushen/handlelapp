'use client'
import FilterDropdown from "./filter-dropdown"
import LoginButton from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'


export default function FilterBar({ search, getProductsSearch, setQ }) {


    return (
        <>
            <main className="w-full rounded-full flex items-center justify-between ">
                <form onSubmit={(e) => getProductsSearch(e)}>
                    <input defaultValue={search} onChange={(e) => setQ(e.target.value)} placeholder="søk…" className=" text-black p-3 w-full md:w-80 bg-white h-5/6 rounded-full">

                    </input>
                </form>
                <LoginButton>
                    <Button>Login</Button>
                </LoginButton>
            </main>
        </>
    )
}