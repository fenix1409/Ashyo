"use client"
import { Context } from '@/context/AuthContext'
import { instance } from '@/hook/instance'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import React, { FormEvent, useContext } from 'react'


interface LoginType {
  onClose:() => any
}
const LoginInputs:React.FC<LoginType> = ({onClose}) => {
  const { setAccessToken } = useContext(Context)

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = {
      phone_number: (e.target as HTMLFormElement).phone_number.value,
      password: (e.target as HTMLFormElement).password.value
    }
    instance().post(`/auth/sign-in`, data).then(res => {
      setAccessToken(res.data.data.tokens.access_token)
      onClose()
    })

  }
  return (
    <form onSubmit={handleLogin} className='space-y-5' autoComplete='off'>
      <Input name='phone_number' required size='lg' placeholder='Enter phone number' type='number' defaultValue='+998' />
      <Input name='password' required size='lg' placeholder='Enter password' type='password' />
      <Button className='w-full fond-semibold text-[20px] text-white' color='warning' type='submit' size='lg'>Login</Button>
    </form>
  )
}

export default LoginInputs