"use client"
import { instance } from "@/hook/instance";
import { useEffect, useState } from "react"

export interface CategoryType {
    id: number
    name: string
    createdAt?: string
    lastUpdataAt?: string
}

export const Category = () => {
    const [categoryList, setCategoryList] = useState<CategoryType[]>([])

    useEffect(() => {
        instance().get('/category/search').then(res => 
            setCategoryList(res.data.data.categories.map((item:CategoryType) => ({id:item.id, name:item.name})))
        )
    }, [])
    return categoryList
}