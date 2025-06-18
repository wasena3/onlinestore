import BoxText from '@/components/Helper/BoxText'
import Image from 'next/image'
import React from 'react'

const Team = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center'>
                {/* text content */}
                <div className='lg:col-span-2'>
                    <BoxText>
                        Our Team
                    </BoxText>
                    {/* Heading */}
                    <h1 className='mt-4 text-xl md:text-2xl font-bold text-gray-600'>Our Team of Experts in the FinTech Industry</h1>
                    {/* description */}
                    <p className='mt-4 text-gray-700'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quia aliquid consequuntur.
                    </p>
                    <div className='mt-8'>
                        <a href="#_" className="relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-200 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-green-700"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-500 group-hover:-rotate-180 ease"></span>
                                <span className="relative">Join Our Team</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-green-800 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                </div>
                {/* Images */}
                <div className='sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:col-span-3'>
                    <div 
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-center"
                    className='relative overflow-hidden'>
                        <Image
                            src="/images/t1.jpg"
                            alt="team"
                            width={300}
                            height={300}
                            className='rounded-lg'
                        />
                        <div className='absolute bottom-0 w-full h-[5rem] p-4 ease-linear bg-rose-500 rounded-lg'>
                            <p className='text-lg text-white font-bold'>Steve Makazi</p>
                            <p className='text-sm text-gray-200'>(Founder)</p>
                        </div>
                    </div>
                    <div 
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="100"
                    className='relative overflow-hidden'>
                        <Image
                            src="/images/ta2.jpg"
                            alt="team"
                            width={300}
                            height={300}
                            className='rounded-lg'
                        />
                        <div className='absolute bottom-0 w-full h-[5rem] p-4 ease-linear bg-orange-500 rounded-lg'>
                            <p className='text-lg text-white font-bold'>Mikasa Ackerman</p>
                            <p className='text-sm text-gray-200'>(Co-Founder)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team