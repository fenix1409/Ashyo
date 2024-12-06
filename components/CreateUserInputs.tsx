"use client"
import { instance } from '@/hook/instance'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import React, { FormEvent, SetStateAction } from 'react'

interface CreateUserType {
    setIsLogin:React.Dispatch<SetStateAction<"login" | "createUser">>
}
const CreateUserInputs: React.FC<CreateUserType> = ({setIsLogin}) => {

    function handleCreateUser(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = {
            first_name: (e.target as HTMLFormElement).first_name.value,
            last_name: (e.target as HTMLFormElement).last_name.value,
            phone_number: (e.target as HTMLFormElement).phone_number.value,
            email: (e.target as HTMLFormElement).email.value,
            password: (e.target as HTMLFormElement).password.value
        }
        instance().post('/auth/user/sign-up', data).then(() => setIsLogin("login"))
    }
    return (
        <form onSubmit={handleCreateUser} className='space-y-5' autoComplete='off'>
            <Input name='first_name' required size='lg' placeholder='Enter first name' />
            <Input name='last_name' required size='lg' placeholder='Enter last name' />
            <Input name='phone_number' required size='lg' placeholder='Enter phone number' type='number' defaultValue='+998' />
            <Input name='email' required size='lg' placeholder='Enter email' type='email' />
            <Input name='password' required size='lg' placeholder='Enter password' type='password' />
            <Button className='w-full fond-semibold text-[20px] text-white' color='warning' type='submit' size='lg'>Create User</Button>
        </form>
    )
}

export default CreateUserInputs