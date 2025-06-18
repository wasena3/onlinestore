import Image from 'next/image'
import React from 'react'
import { GoWorkflow } from 'react-icons/go'
import { LuPen } from 'react-icons/lu'
import { MdAccessAlarm, MdOutlineTouchApp } from 'react-icons/md'

const Feature = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-100'>
            <div>
                <h1 className='text-center text-2xl font-bold text-green-950'>
                    Key Features of Each Package
                </h1>
                <p className="mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia aliquid consequuntur.
                </p>
            </div>
            {/* Main Grid Container */}
            <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
                {/* Inner Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                    {/*First Box */}
                    <div
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-center"
                        className='bg-white p-4 rounded-lg'
                    >
                        <div className='flex items-center space-x-3'>
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-yellow-100 
                            bg-opacity-20">
                                <MdOutlineTouchApp className='w-6 h-6 text-orange-400' />
                            </div>
                            {/* Heading */}
                            <h1 className='text-lg font-bold text-green-650'>App Integration</h1>
                        </div>
                        {/* description */}
                        <p className='mt-3 mb-3 text-green-650 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum obcaecati
                            optio ipsum quod
                        </p>
                    </div>
                    {/*Second Box */}
                    <div
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-center"
                        data-aos-delay="100"
                        className='bg-white p-4 rounded-lg'
                    >
                        <div className='flex items-center space-x-3'>
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-yellow-100 
                            bg-opacity-20">
                                <GoWorkflow className='w-6 h-6 text-orange-400' />
                            </div>
                            {/* Heading */}
                            <h1 className='text-lg font-bold text-green-650'>Workflow Builder</h1>
                        </div>
                        {/* description */}
                        <p className='mt-3 mb-3 text-green-650 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum obcaecati
                            optio ipsum quod
                        </p>
                    </div>
                    {/*Third Box */}
                    <div
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-center"
                        data-aos-delay="200"
                        className='bg-white p-4 rounded-lg'
                    >
                        <div className='flex items-center space-x-3'>
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-yellow-100 
                            bg-opacity-20">
                                <LuPen className='w-6 h-6 text-orange-400' />
                            </div>
                            {/* Heading */}
                            <h1 className='text-lg font-bold text-green-650'>Design Tools</h1>
                        </div>
                        {/* description */}
                        <p className='mt-3 mb-3 text-green-650 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum obcaecati
                            optio ipsum quod
                        </p>
                    </div>
                    {/*Fourth Box */}
                    <div
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-center"
                        data-aos-delay="300"
                        className='bg-white p-4 rounded-lg'
                    >
                        <div className='flex items-center space-x-3'>
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-yellow-100 
                            bg-opacity-20">
                                <MdAccessAlarm className='w-6 h-6 text-orange-400' />
                            </div>
                            {/* Heading */}
                            <h1 className='text-lg font-bold text-green-650'>All round access</h1>
                        </div>
                        {/* description */}
                        <p className='mt-3 mb-3 text-green-650 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum obcaecati
                            optio ipsum quod
                        </p>
                    </div>
                </div>
                {/* Image Content */}
                <div
                    data-aos="fade-left"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="400"
                >
                    <Image src="/images/f1.png" alt='feature' width={700} height={700} />
                </div>
            </div>
        </div>
    )
}

export default Feature