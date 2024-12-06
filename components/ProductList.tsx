"use client"
import { Product } from "@/service/Product";
import Image from "next/image";
import React from 'react'


const ProductList = () => {
    const products = Product()
    return (
        <div className="">
            <h2 className="text-[32px] leading-[41px] font-bold pl-[115px] mt-10 mb-[50px]">All product</h2>
            <ul className="flex items-center gap-[30px] overflow-x-auto pl-10">
                {products.map(item => (
                    <li key={item.id} className="w-[273px] h-[422px]">
                        <Image src={'/images/earphone.png'} alt="image" className="bg-cover h-[202px] bg-[#EBEFF3] rounded-lg mb-[16px]" width={202} height={202} />
                        <h2 className="text-[14px] leading-[19px] text-[#545D6A]">{item.name}</h2>
                        <strong className="text-[20px] leading-[26px] font-bold text-[#0A1729]">{item.price} $</strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList