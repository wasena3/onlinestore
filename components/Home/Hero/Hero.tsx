import Image from 'next/image'
import React from 'react'
import { BsStarHalf } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='relative w-full h-[110vh] sm:h-screen bg-[url("/images/bg.png")] bg-cover bg-center 
    flex justify-center flex-col'>
            <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
                {/* Text Side */}
                <div data-aos="fade-up">
                    <p className='text-sm sm:text-base md:text-xl font-bold text-green-950'>
                        Take Control of Your Finances
                    </p>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl mt-6 mb-6 font-bold 
                text-green-950 leading-[2.5rem] md:leading-[3.5rem]'>
                        Manage Your Finances Like a Pro with <span
                            className='text-2xl sm:text-3xl md:text-4xl font-bold text-green-500'>
                            FlashDev</span>
                    </h1>
                    <p className='text-xs sm:text-sm md:text-base font-medium text-gray-700'>Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Quaerat officia esse nesciunt explicabo laudantium culpa
                        quibusdam nemo laborum consequatur nobis!</p>
                    {/* Ratings */}
                    <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-10 mt-6">
                        <div className="flex items-center space-x-4">
                            <Image src="/images/google.png" alt='google' width={40} height={40} />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h1 className='text-lg sm:text-xl md:text-2xl text-gray-700 font-bold'>4.5</h1>
                                    <div className="flex items-center">
                                        <FaStar className='w-4 h-4 text-yellow-400' />
                                        <FaStar className='w-4 h-4 text-yellow-400' />
                                        <FaStar className='w-4 h-4 text-yellow-400' />
                                        <FaStar className='w-4 h-4 text-yellow-400' />
                                        <FaStar className='w-4 h-4 text-yellow-400' />
                                        <BsStarHalf className='w-4 h-4 text-yellow-400' />
                                    </div>
                                </div>
                                <p className='text-gray-700 text-sm sm:text-base'>
                                    Best Rated On Google
                                </p>
                            </div>
                        </div>
                        <div className="flex mt-6 sm:mt-0 items-center space-x-4">
                            <Image src="/images/linkedin.png" alt='linkedIn' width={40} height={40} />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h1 className='text-lg sm:text-xl md:text-2xl text-gray-700 font-bold'>4.7</h1>
                                    <div className="flex items-center">
                                        <FaStar className='w-4 h-4 text-yellow-400' />
                                        <FaStar className='w-4 h-4 text-yellow-400' />
                                        <FaStar className='w-4 h-4 text-yellow-400' />
                                        <FaStar className='w-4 h-4 text-yellow-400' />
                                        <FaStar className='w-4 h-4 text-yellow-400' />
                                        <BsStarHalf className='w-4 h-4 text-yellow-400' />
                                    </div>
                                </div>
                                <p className='text-gray-700 text-sm sm:text-base'>
                                    Best Rated On LinkedIn
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#_" className="relative inline-flexlex items-center justify-center inline-block 
                        lock p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 
                            bg-red-500 rounded-full blur-md ease"></span>
                            <span className="absolute inset-0 w-full h-full transition 
                            duration-700 group-hover:rotate-180 ease">
                                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 
                                bg-purple-500 rounded-full blur-md"></span>
                                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 
                                bg-pink-500 rounded-full blur-md"></span>
                            </span>
                            <span className="relative text-white">See More</span>
                        </a>
                        <a href="#_" className="relative inline-flexlex items-center justify-center 
                        inline-block lock p-4 px-5 py-3 overflow-hidden font-medium 
                        text-indigo-600 rounded-lg shadow-2xl group">
                            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 
                            bg-rose-500 rounded-full blur-md ease"></span>
                            <span className="absolute inset-0 w-full h-full transition 
                            duration-700 group-hover:rotate-180 ease">
                                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 
                                bg-blue-500 rounded-full blur-md"></span>
                                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 
                                bg-red-500 rounded-full blur-md"></span>
                            </span>
                            <span className="relative text-white">Create Account</span>
                        </a>
                    </div>
                </div>
                {/* Image Side */}
                <div
                    data-aos="fade-down"
                    data-aos-delay="150"
                    className='mx-auto hidden xl:block'
                >
                    <Image src="/images/hero.jpg" alt='hero' width={900} height={900} />
                </div>
            </div>
        </div>
    )
}

export default Hero