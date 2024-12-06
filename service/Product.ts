"use client"
import { instance } from "@/hook/instance";
import { useEffect, useState } from "react"

export interface ProductType {
    id: number;
    createdAt: string;
    lastUpdateAt: string;
    name: string;
    price: string;
    rate: null;
    images: string[];
    brand_id: number;
}

export const Product = () => {
    const [data, setData] = useState<ProductType[]>([])

    useEffect(() => {
        instance().get("/products/search").then(res => {
            setData(res.data.data.products)
        })
    }, [])
    return data
}