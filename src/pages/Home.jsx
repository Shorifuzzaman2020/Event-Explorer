
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/eventsData.json')
            .then((response) => response.json())
            .then((data) => setEvents(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="bg-gray-50 w-11/12 mx-auto mt-3">
            <section className="slider-section mb-10">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    speed={500} 
                    navigation={true} 
                    pagination={{ clickable: true }} 
                    keyboard={{ enabled: true }}
                    touchRatio={1.5}
                    modules={[Navigation, Pagination, Keyboard]}
                >
                    <SwiperSlide>
                        <div className='pt-20 px-40 pb-24 bg-blue-300 text-center rounded-lg'>
                            <h1 className='text-4xl font-bold mb-10'>Tech Innovation Summit 2025: Shaping the Future</h1>
                            <p className='mt-3 mb-4'>The Tech Innovation Summit is a premier gathering of visionaries, industry leaders, and innovators, focused on the latest advancements in technology. From AI breakthroughs to sustainable tech solutions, this summit fosters collaboration and drives transformative ideas that shape the future of industries worldwide.</p>
                            <p className="text-2xl font-bold text-yellow-800 overflow-hidden whitespace-nowrap">
                                <span className="animate-marquee">
                                    Join the events and increase your skill
                                </span>
                            </p>

                            <style jsx>{`
                                @keyframes marquee {
                                    0% {
                                    transform: translateX(100%);
                                    }
                                    100% {
                                    transform: translateX(-100%);
                                    }
                                }

                                .animate-marquee {
                                    display: inline-block;
                                    animation: marquee 10s linear infinite;
                                }
                                `}</style>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='pt-20 px-40 pb-24 bg-gray-400 text-center rounded-lg'>
                            <h1 className='text-4xl font-bold mb-10'>AI Summit 2025: Unlocking the Power of Artificial Intelligence</h1>
                            <p className='mt-3 mb-4'>The AI Summit is a global platform where pioneers, experts, and business leaders converge to explore the transformative impact of artificial intelligence. From cutting-edge innovations to ethical discussions, this summit showcases breakthroughs in AI technology, shaping the future of industries and society.</p>
                            <p className="text-2xl font-bold text-yellow-800 overflow-hidden whitespace-nowrap">
                                <span className="animate-marquee">
                                    Join the events and increase your skill
                                </span>
                            </p>

                            <style jsx>{`
                                @keyframes marquee {
                                    0% {
                                    transform: translateX(100%);
                                    }
                                    100% {
                                    transform: translateX(-100%);
                                    }
                                }

                                .animate-marquee {
                                    display: inline-block;
                                    animation: marquee 10s linear infinite;
                                }
                                `}</style>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='pt-20 px-40 pb-24 bg-green-200 text-center rounded-lg'>
                            <h1 className='text-4xl font-bold mb-10'>Blockchain Technology Forum 2025: Decentralizing the Future</h1>
                            <p className='mt-3 mb-4'>The Blockchain Technology Forum brings together experts, developers, and industry leaders to explore the latest advancements in decentralized solutions. From finance to supply chains, this forum showcases how blockchain is revolutionizing industries, enhancing security, and fostering transparency in the digital era.</p>
                            <p className="text-2xl font-bold text-yellow-800 overflow-hidden whitespace-nowrap">
                                <span className="animate-marquee">
                                    Join the events and increase your skill
                                </span>
                            </p>

                            <style jsx>{`
                                @keyframes marquee {
                                    0% {
                                    transform: translateX(100%);
                                    }
                                    100% {
                                    transform: translateX(-100%);
                                    }
                                }

                                .animate-marquee {
                                    display: inline-block;
                                    animation: marquee 10s linear infinite;
                                }
                                `}</style>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className="upcoming-events mb-10 px-4">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Upcoming Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <div key={index} className="event-card bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={event.thumbnail}
                                alt={event.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.name}</h3>
                                <p className="text-gray-600 mb-2">Category: {event.category}</p>
                                <p className="text-gray-600 mb-2">Date: {event.date}</p>
                                <p className="text-gray-600 mb-2">Location: {event.location}</p>
                                <p className="text-gray-800 font-semibold mb-4">Entry Fee: {event.entry_fee}</p>
                                <Link
                                    to={`/event/${event.id}`}
                                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                                >
                                    View More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="extra-section mb-10 px-6 py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg text-center">
                <h2 className="text-4xl font-bold mb-6">Stay Updated with the Latest Events!</h2>
                <p className="text-lg mb-8">Subscribe to our newsletter and never miss an opportunity to enhance your skills.</p>

                <div className="flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
                    />
                    <button className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-r-lg hover:bg-yellow-500 transition duration-300">
                        Subscribe
                    </button>
                </div>
            </section>


            <section className="extra-section mb-10 px-6 py-16 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Event Highlights Timeline</h2>

                <div className="overflow-x-auto flex space-x-6 p-4">
                    {events.map((event, index) => (
                        <div key={index} className="min-w-[250px] bg-white shadow-md rounded-lg p-4 text-center">
                            <h3 className="text-xl font-bold text-blue-600">{event.name}</h3>
                            <p className="text-gray-600">{event.date}</p>
                            <p className="text-gray-800 font-semibold">{event.location}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;

// WORKING CODE


