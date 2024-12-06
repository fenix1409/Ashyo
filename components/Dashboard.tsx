"use client"
import { Backpack, LikeList, LocationIcon, LoginIcon, Logo, Lupa, Mass, SelectIcon } from '@/public/Icons'
import { useDisclosure } from '@nextui-org/modal'
import { Input } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import CustomModal from './CustomModal'
import LoginInputs from './LoginInputs'
import CreateUserInputs from './CreateUserInputs'
import CategoryList from './CategoryList'
import ProductList from './ProductList'

const Dashboard = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
    const [isLogin, setIsLogin] = useState<"login" | "createUser">("login")
    return (
        <>
            <div className='flex flex-col'>
                <div className="bg-[#EBEFF3] w-full py-[11px] flex items-center justify-between px-[130px]">
                    <ul className='flex items-center gap-[28px]'>
                        <li>
                            <Link className='text-[14px] leading-[16px] text-[#545D6A] flex items-center gap-[10px]' href={'#'}><LocationIcon />  Tashkent</Link>
                        </li>
                        <li>
                            <Link className='text-[14px] leading-[16px] text-[#545D6A]' href={'#'}>About Us</Link>
                        </li>
                        <li>
                            <Link className='text-[14px] leading-[16px] text-[#545D6A]' href={'#'}>Products</Link>
                        </li>
                        <li>
                            <Link className='text-[14px] leading-[16px] text-[#545D6A]' href={'#'}>Contacts</Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-[15px]">
                        <Link className='text-[14px] leading-[18px] text-[#545D6A]' href={'tel:+998711234567'}>+998 (71) 123-45-67</Link>
                        <strong className='text-[] leading-[] text-[#545D6A] flex items-center gap-[8px]'>Uz <SelectIcon /></strong>
                    </div>
                </div>
                <div className="flex items-center gap-[52px] px-[115px]">
                    <Link className='text-[36px] leading-[42px] font-black text-[#134E9B] flex items-center' href={'/'}><Logo /> Ashyo</Link>
                    <div className="flex items-center gap-[15px]">
                        <button className='w-[160px] py-[14px] rounded-md bg-[#134E9B] text-[16px] leading-[18px] font-medium text-white text-center'>Kategorya</button>
                        <label className='flex items-center justify-between relative flex-row-reverse'>
                            <Input size='large' placeholder='What are you looking for?' className='w-[518px] h-[48px]' />
                            <button className='w-[60px] rounded-md bg-[#134E9B] py-[14px] absolute flex justify-center'><Lupa /></button>
                        </label>
                    </div>
                    <ul className='flex items-center gap-[15px]'>
                        <li className='cursor-pointer'><Mass /></li>
                        <li className='cursor-pointer'><LikeList /></li>
                        <li className='cursor-pointer'><Backpack /></li>
                        <button onClick={onOpen} className='cursor-pointer'><LoginIcon /></button>
                    </ul>
                </div>
                <div>
                    <CategoryList />
                    <ProductList />
                </div>
            </div>
            <CustomModal setIsLogin={setIsLogin} isLogin={isLogin} isOpen={isOpen} onOpenChange={onOpenChange}>
                {isLogin === "login" ? <LoginInputs onClose={onClose} /> : <CreateUserInputs setIsLogin={setIsLogin} />}
            </CustomModal>
        </>
    )
}

export default Dashboard