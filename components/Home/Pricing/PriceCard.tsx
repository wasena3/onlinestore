import React from 'react'

type Props = {
    time: string,
    price: string
}
const PriceCard = ({ time, price }: Props) => {
    return (
        <div className='bg-white rounded-lg relative p-8 border-t-4 border-rose-400'>
            <h1 className='text-sky-500 text-xl font-bold'>{time} membership</h1>
            <p className='mt-4 text-gray-600 font-medium'>
                Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Sunt, quos autem voluptate
                voluptatibus.
            </p>
            {/* price */}
            <div className='mt-8'>
                <div className='text-gray-700 font-semibold text-lg'>
                    <span className='text-xl font-bold text-black'>
                        ${price}
                    </span> / Month
                </div>
            </div>
            {/* button */}
            <div className='mt-12'>
                <a href="#_" className="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
                    Upgrade Now
                </a>
            </div>
        </div>
    )
}

export default PriceCard