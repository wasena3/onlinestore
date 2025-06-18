import React from 'react'
import ClientReviewCard from './ClientReviewCard'

const ClientReview = () => {
    return (
        <div className='p-16 pb-16 bg-gray-100'>
            {/* Heading */}
            <h1 className='text-center text-2xl text-blue-950 font-bold'>What Our Happy Clients Say</h1>
            {/* subheading */}
            <p className='text-center mt-3 font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] 
        md:w-[50%]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium ullam sint architecto voluptatum sequi optio, corporis a.
            </p>
            {/* grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto">
                <div
                    data-aos="zoom-in"
                    data-aos-anchor-placement="top-center"
                >
                    <ClientReviewCard
                        image="/images/u4.jpg"
                        name="Jessica Doe"
                        rating="4.7"
                    />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="100"
                >
                    <ClientReviewCard
                        image="/images/utp.jpg"
                        name="John Doe"
                        rating="4.5"
                    />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="200"
                >
                    <ClientReviewCard
                        image="/images/t2.jpg"
                        name="Alexia Doe"
                        rating="4.7"
                    />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="300"
                >
                    <ClientReviewCard
                        image="/images/ut2.jpg"
                        name="Eren Jaeger"
                        rating="4.9"
                    />
                </div>

            </div>
        </div>
    )
}

export default ClientReview