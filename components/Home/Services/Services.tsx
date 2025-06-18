import BoxText from '@/components/Helper/BoxText';
import React from 'react';
import { FaRocket, FaHandshake, FaChartLine, FaUsers, FaCogs, FaShoppingCart } from 'react-icons/fa'; // Import more icons as needed


interface Service {
    icon: React.ReactElement;
    title: string;
    description: string;
}

const Services = () => {
    const services: Service[] = [
        {
            icon: <FaRocket className='w-6 h-6 text-orange-500' />,
            title: 'Startup',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            icon: <FaHandshake className='w-6 h-6 text-blue-500' />,
            title: 'Partnerships',
            description: 'Collaborate and grow your business with strategic alliances.',
        },
        {
            icon: <FaChartLine className='w-6 h-6 text-green-500' />,
            title: 'Growth',
            description: 'Achieve sustainable growth with our data-driven strategies.',
        },
        {
            icon: <FaUsers className='w-6 h-6 text-purple-500' />,
            description: 'Build a strong team and cultivate a positive work environment.',
            title: 'Team Building'
        },
        {
            icon: <FaCogs className='w-6 h-6 text-teal-500' />,
            title: 'Innovation',
            description: 'Drive innovation with cutting-edge technology and creative thinking.',
        },
        {
            icon: <FaShoppingCart className='w-6 h-6 text-red-500' />,
            title: 'Sales',
            description: 'Increase your sales with proven marketing and sales strategies.',
        },
    ];

    return (
        <div className='pt-16 pb-16'>
            <div className="w-[80%] mx-auto">
                <BoxText>Our Services</BoxText>
                <h1 className='mt-4 text-2xl md:text-3xl font-bold text-gray-700'>
                    Our Services Made For You
                </h1>
                <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus et facilis, veritatis perspiciatis iusto magnam impedit enim aperiam!
                </p>
                {/* grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center gap-y-12 mt-16">
                    {services.map((service, index) => (
                        <div key={index}
                            data-aos="fade-right"
                            data-aos-anchor-placement="top-center"
                            className="flex items-center space-x-5">
                            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-yellow-100 bg-opacity-20">
                                {service.icon}
                            </div>
                            <div>
                                <p className='text-lg font-bold text-gray-700'>{service.title}</p>
                                <p className='text-sm text-gray-600'>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
