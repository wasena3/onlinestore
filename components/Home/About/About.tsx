import BoxText from '@/components/Helper/BoxText'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className=" w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Image Side */}
                <div 
                    data-aos="zoom-in"
                    data-aos-anchor-placement="top-center"
                >
                    <Image src="/images/abiout.png" alt='about' width={600} height={600} />
                </div>
                {/* Text Side */}
                <div>
                    <BoxText>About Us</BoxText>
                    <h1 className='text-2xl sm:text-3xl mt-3 leading-[2.5rem] sm:leading-[3rem] 
                font-bold text-green-950'>
                        Go Big That's The Motto
                    </h1>
                    <p className='mt-3 leading-relaxed text-sm sm:text-base text-green-750'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat consectetur soluta suscipit! Reiciendis suscipit, blanditiis,
                        veniam maiores amet quod deserunt
                    </p>
                    <button className='mt-5 text-[#00b4d8] font-bold pb-1 border-b-2 border-[#00b4d8]'>
                        Learn More &#8594;
                    </button>
                    <div className="mt-8 border-l-2 border-gray-200">
                        <div className="ml-6">
                            <p className='text-green-650 font-medium'>
                                &quot; The many integrations that can be linked really help me see data from other
                                tools I also use. &quot;
                            </p>
                            <div className="flex items-center space-x-6 mt-6">
                                <Image src={"/images/u1.jpg"} alt='user' width={40} height={40} className='rounded-full'/>
                                <div>
                                    <p className='font-medium'>Iris West</p>
                                    <p className='text-green-650 text-sm'>Web Developer @FlashDev</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About