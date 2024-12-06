"use client"
import { Category } from '@/service/Category'
import Link from 'next/link'
import React from 'react'


const CategoryList = () => {
    const categories = Category()

    
    return (
        <div className="flex items-center justify-center gap-[50px] px-[115px]">
            {categories.map(item => (
                <Link href={'#'} key={item.id}>{item.name}</Link>
            ))}
        </div>
    )
}

export default CategoryList