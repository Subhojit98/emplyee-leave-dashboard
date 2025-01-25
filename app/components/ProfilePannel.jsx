import Image from 'next/image'
import React from 'react'
import profilePicture from '@/app/assets/profilePicture.jpg'
import { Button } from '@/components/ui/button'
import { Calendar} from 'lucide-react'
const ProfilePannel = () => {
  return (
    <div className='w-full h-[25%] bg-white rounded-md mt-2'>
      {/* Avatar Section -> */}
      <div className="w-full flex items-center pb-5 justify-between border-b-2  border-gray-100 p-3 px-8">
        <div className="flex items-center gap-x-6">
            <span className='w-20 h-20 rounded-full relative'>
                <Image src={profilePicture} alt='profile picture' className='absolute w-full h-full object-cover rounded-full'/>
             <span className='absolute w-5 h-5 bg-green-500 rounded-full bottom-0 right-0'></span>
            </span>

            <div>
                <h1 className='font-thin text-3xl'>Johana Doe</h1>
                <p className='text-lg text-gray-600'>thisIsJohana@fluidesigns.in</p>
            </div>
        </div>

        <Button varient="" className='text-white text-lg p-5'>Selfie Clock In</Button>
      </div>

      {/* Work Info Section -> */}
      
        <div className="w-full flex justify-between mt-3 px-10">
            <div className=' flex items-center gap-x-5'>
                <span className='text-lg font-thin'>October</span> <Calendar/>
            </div>

            <div>
                <h1 className='text-lg text-neutral-500 font-thin'> Present Days</h1> 
                <h2 className='text-3xl mt-6'>13</h2>
            </div>
            <div>
                <h1 className='text-lg text-neutral-500 font-thin'> Total Leave Balance </h1> 
            <h2 className='text-3xl mt-6'>05</h2>
            </div>
            <div>
                <h1 className='text-lg text-neutral-500 font-thin'> Outstanding Anomalies</h1> 
              <h2 className='text-3xl mt-6'> 05</h2>
            </div>
            <div>
                <h1 className='text-lg text-neutral-500 font-thin'> Avg. Working Hours</h1> 
              <h2 className='text-3xl mt-6'> 8hrs 20min</h2>
            </div>
            </div>

      
    </div>
  )
}

export default ProfilePannel
