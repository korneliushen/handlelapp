
import Image from "next/image"
import jokerpic from "/Users/henrik/Documents/GitHub/handlelapp/handlelapp-kode/public/Joker.svg"
import OtherShopPriceCard from "./other-shop-price-card"
import produktbilde from "/Users/henrik/Documents/GitHub/handlelapp/handlelapp-kode/public/litago-dobbel-sjokolade.avif"

export default function({productName, productVendor, productPrice, productImage, storeLogo, firstStorePrice}) {

    return(
        <>
            <main className=" bg-secondary h-[360px] w-80 rounded-lg drop-shadow-sm leading-5 border-[1px] border-primary">
                <section className="h-1/2 w-full flex items-center justify-center relative">
                    <Image className=" object-contain" alt="produktbilde" src={productImage} fill={true} />
                </section>
                <section className="h-1/2 w-full bg-primary rounded-b-lg p-2">
                    <div className=" h-[74px] w-full flex justify-between">
                        <section className="w-1/2">
                            <div className="flex">
                                <div className="">
                                        <span className="">{productName}</span>
                                </div>
                            </div>
                            <div className="h-1/3">
                                    <span className="text-secondary">{productVendor}</span>
                            </div>
                        </section>
                        <section className="w-1/2 h-full flex justify-end items-center">
                            <div className="flex">
                                <div className=" text-lg flex items-center ">
                                    <span>{productPrice}kr</span>
                                </div>
                                <div className="h-1 w-1"></div>
                                <div>
                                    <Image className="rounded-sm" alt="joker" src={storeLogo} width={48} height={48} />
                                </div>
                                <div className="h-1 w-1.5"></div>
                            </div>
                        </section>
                    </div>
                    <div className=" h-8 w-full flex justify-between">
                        <div className=" h-full  flex items-center">
                            <OtherShopPriceCard firstStorePrice={firstStorePrice} />
                            <OtherShopPriceCard />  
                            <OtherShopPriceCard />  
                        </div>
                        <div className="  h-full w-10 flex justify-center items-center">
                            <span>1+</span>
                        </div>
                    </div>
                    <div className=" h-[66px] w-full flex items-center justify-center">
                        <button className=" h-12 w-[98%] bg-accent rounded-full text-sm">Legg i handlekurv</button>
                    </div>
                </section>
            </main>
        </>
    )
}