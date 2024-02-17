'use client'
import Image from "next/image"
import Link from "next/link"

export default function ({ productName, productVendor, productImage, storeLogo, price, id }) {
    if (productName.length > 31) {
        productName = productName.substring(0, 31) + "..."
    }
    if (productVendor?.length > 16) {
        productVendor = productVendor.substring(0, 16) + "..."
    }
    return (
        <>
            <Link href={`/produkt/${id}`}>
                <li className="bg-white w-full rounded-lg drop-shadow-md leading-5 ">
                    <section className="h-[10em] w-full bg-white rounded-t-lg flex items-center justify-center relative overflow-hidden">
                        <Image className="rounded-lg object-contain" alt="Det finnes ikke produktbilde" src={productImage} placeholder="empty" priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} />
                    </section>
                    <section className="h-1/2 w-full bg-accent rounded-b-lg p-2">
                        <div className=" h-[74px] w-full flex ">
                            <section className="w-6/10 ">
                                <div className="flex">
                                    <span className="text-sm ">{productName}</span>
                                </div>
                                <div className="h-1/3">
                                    <span className="text-gray-500 text-xs">{productVendor}</span>
                                </div>
                            </section>
                            <section className="w-1/2 h-full flex justify-end items-center">
                                <div className="flex">
                                    <div className=" text-lg flex items-center">
                                        <span className="">{price}kr</span>
                                    </div>
                                    <div className="h-1 w-1"></div>
                                    <div className="w-10 h-10 relative">
                                        <Image className="rounded-sm w-10" alt="joker" src={storeLogo} fill={true} />
                                    </div>
                                    <div className="h-1 w-1.5"></div>
                                </div>
                            </section>
                        </div>
                        <div className=" h-[50px] w-full flex items-center justify-center ">
                            <button className=" h-12 w-[98%] bg-primary rounded-full text-white text-sm drop-shadow-md">Legg i handlekurv</button>
                        </div>
                    </section>
                </li>
            </Link>
        </>
    )
}