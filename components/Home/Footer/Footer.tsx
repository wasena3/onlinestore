import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2
        lg:grid-cols-4 gap-10'>
            {/* 1st part */}
            <div className="space-y-5">
                <h1 className='text-lg font-bold'>Solution</h1>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-green-950">
                    Enterprise
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-green-950">
                    By Workflow
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-green-950">
                    By Team
                </p>
            </div>
            {/* 2nd part */}
            <div className="space-y-5">
                <h1 className='text-lg font-bold'>Company</h1>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-green-950">
                    About Us
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-green-950">
                    News & Press
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-green-950">
                    Our Customers
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-green-950">
                    Leadership
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-green-950">
                    Careers
                </p>
            </div>
            {/* 3rd part */}
            <div className="space-y-5">
                <h1 className='text-lg font-bold'>Resources</h1>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-green-950">
                    Blog
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-green-950">
                    Webinar & Events
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-green-950">
                    Podcasts
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-green-950">
                    E-book & Guides
                </p>
            </div>
            {/* 4th part */}
            <div className="space-y-5">
                <h1 className='text-lg font-bold'>Contact Us</h1>
                <div className='mt-6'>
                    <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                    <h1 className='text-base font-bold text-green-950'>+254 123456789</h1>
                </div>
                <div className='mt-6'>
                    <h1 className='text-sm text-gray-600'>Our Email</h1>
                    <h1 className='text-base font-bold text-green-950'>someoneelse@email.com</h1>
                </div>
            </div>
        </div>
        {/* bottom part */}
        <div className='mt-8  w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between 
        items-center md:items-center text-gray-600 text-sm'>
            <p className='text-center md:text-left'>Copyright © 2025 FlashDev. All rights reserved</p>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                <span>
                    Social : 
                </span>
                <span className='text-gray-500 hover:text-gray-800'><FaFacebook /></span>
                <span className='text-gray-500 hover:text-gray-800'><FaTwitter /></span>
                <span className='text-gray-500 hover:text-gray-800'><FaDribbble /></span>
            </div>
        </div>
    </div>
  )
}

export default Footer