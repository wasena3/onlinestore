import React from 'react'
import PriceCard from './PriceCard'

const Pricing = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-100'>
            <h1 className='text-center text-2xl text-blue-800 font-bold'>
                Choose the Plan That Suits You
            </h1>
            <p className='mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam
                pariatur commodi maiores consequuntur a.
            </p>
            <div className='w-[90%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 
            items-center'>
                <div>
                    {/* price card */}
                    <PriceCard 
                    time="3 Month"
                    price="29.99"
                    />
                </div>
                <div>
                    {/* price card */}
                    <PriceCard 
                    time="12 Month"
                    price="39.99"
                    />
                </div>
                <div>
                    {/* price card */}
                    <PriceCard 
                    time="Lifetime"
                    price="9.99"
                    />
                </div>
            </div>
        </div>
    )
}

export default Pricing