
import Image from "next/image"
import OtherShopPriceCard from "./other-shop-price-card"

export default function({productName, productVendor, productImage, storeLogo, smallestNumber, sortedPrices, compare_res}) {
    if (productName.length > 31) {
        productName = productName.substring(0, 31) + "..."
      }
      if (productVendor?.length > 16) {
        productVendor = productVendor.substring(0, 16) + "..."
      }
    return(
        <>
            <li className="bg-white w-full rounded-lg drop-shadow-sm leading-5 border-[1px] border-primary">
                <section className="h-[10em] w-full flex items-center justify-center relative overflow-hidden">
                    <Image className="rounded-lg object-contain" alt="produktbilde" src={productImage} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true}/>
                </section>
                <section className="h-1/2 w-full bg-primary rounded-b-[0.7rem] p-2">
                    <div className=" h-[74px] w-full flex ">
                        <section className="w-6/10 ">
                            <div className="flex">
                                <span className="text-sm">{productName}</span>
                            </div>
                            <div className="h-1/3">
                                    <span className="text-secondary text-xs">{productVendor}</span>
                            </div>
                        </section>
                        <section className="w-1/2 h-full flex justify-end items-center">
                            <div className="flex">
                                <div className=" text-lg flex items-center">
                                    <span>{smallestNumber}kr</span>
                                </div>
                                <div className="h-1 w-1"></div>
                                <div className="w-10 h-10 relative">
                                    <Image className="rounded-sm w-10" alt="joker" src={storeLogo} fill={true} />
                                </div>
                                <div className="h-1 w-1.5"></div>
                            </div>
                        </section>
                    </div>
                    <div className=" h-8 w-full flex justify-between">
                        <div className=" h-full  flex items-center overflow-x-auto overflow-y-hidden scrollbar-hide">
                            {sortedPrices.map((price, index) => {
                                return compare_res.data.products[index].store.logo ? <OtherShopPriceCard key={index} price={price.price} img={compare_res.data.products[index].store.logo} /> : <div>e</div>
                            })}
                        </div>
                    </div>
                    <div className=" h-[50px] w-full flex items-center justify-center mt-2">
                        <button className=" h-12 w-[98%] bg-accent rounded-full text-sm">Legg i handlekurv</button>
                    </div>
                </section>
            </li>
        </>
    )
}