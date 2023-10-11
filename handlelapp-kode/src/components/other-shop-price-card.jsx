import Image from "next/image"
import BunnprisPic from "/Users/henrik/Documents/GitHub/handlelapp/handlelapp-kode/public/Bunnpris.svg"
export default function() {
    return(
        <>
            <main className="h-8 w-20 rounded-full m-0.5 border-accent border-2 p-2 flex justify-between items-center">
                <div className="text-xs">24,90,-</div>
                <section>
                    <Image alt="joker" src={BunnprisPic} width={15} height={15} />
                </section>
            </main>
        </>
    )
}