
import Image from "next/image"
import ClipLoader from "react-spinners/ClipLoader";
import { VscLoading } from "react-icons/vsc";




export default function productCardSkeleton({ }) {
    return (
        <>
            <li className="bg-white w-full rounded-lg drop-shadow-md leading-5 animate-pulse">
                <section className="h-[10.5em] w-full bg-white rounded-t-lg flex items-center justify-center relative overflow-hidden">
                </section>
                <section className="h-[8.5em] w-full bg-slate-100 rounded-b-lg p-2">
                </section>
            </li>
        </>
    )
}