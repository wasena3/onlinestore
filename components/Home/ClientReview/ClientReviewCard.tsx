import Image from 'next/image'
import React from 'react'
import { BsStarHalf } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

type Props = {
    image: string,
    name: string,
    rating: string
}
const ClientReviewCard = ({ image, name, rating }: Props) => {
    return (
        <div className='bg-white shadow-md p-8 sm:flex items-center space-y-4 sm:space-y-0 
    space-x-6 rounded-lg'>
            {/* Image */}
            <div>
                <Image
                    src={image}
                    alt={name}
                    width={350}
                    height={350}
                    className='rounded-lg' />
            </div>
            <div>
                <h1 className="text-lg font-bold text-blue-950">{name}</h1>
                <div className="flex items-center space-x-3">
                    <p className='text-2xl font-bold text-orange-400'>{rating}</p>
                    <div className="flex item-center">
                        <FaStar className='w-4 h-4 text-yellow-400' />
                        <FaStar className='w-4 h-4 text-yellow-400' />
                        <FaStar className='w-4 h-4 text-yellow-400' />
                        <FaStar className='w-4 h-4 text-yellow-400' />
                        <BsStarHalf className='w-4 h-4 text-yellow-400' />
                    </div>
                </div>
                <p className='mt-2 text-base font-medium text-gray-700'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Commodi, 
                </p>
            </div>
        </div>
    )
}

export default ClientReviewCard