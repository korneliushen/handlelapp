import Image from "next/image"
export default function ({ price, img }) {
    return (
        <>
            <main className="h-8 min-w-fit  rounded-full m-0.5 border-[#37A191] border-2 py-2 flex  px-3 justify-between items-center">
                <div className="text-xs pr-1">{price}kr</div>
                <section>
                    <Image className=" rounded-sm" alt="joker" src={img} width={20} height={20} />
                </section>
            </main>
        </>
    )
}