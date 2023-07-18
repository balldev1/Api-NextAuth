'use client'
import Image from 'next/image'
import Login from './components/login'
import { SessionProvider } from "next-auth/react"
import working from '../public/working.png'

export default function Home({ session }) {
  return (
    <>
      <div className='flex flex-col flex-center items-center  text-black justify-start mt-20 '>
        <div className=' flex  flex-col items-center  bg-white text-black rounded-xl w-[400px] h-[260px]'>
          <h1 className='font-bold'>Hello Api Next Auth</h1>

          <div className='flex items-start just'>
            <Image src={working} alt="Working" height={100} />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1>api : https://melivecode.com/</h1>
            <p>username : karn.yong@melivecode.com</p>
            <p>password : melivecode</p>
          </div>
          <Login />
        </div>
      </div>

    </>
  )
}
