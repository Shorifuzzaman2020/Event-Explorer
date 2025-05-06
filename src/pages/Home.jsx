
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'; 

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
                <Swiper spaceBetween={50} slidesPerView={1}>
                    <SwiperSlide>
                        <div className='pt-20 px-40 pb-24 bg-blue-300 text-center rounded-lg'>
                            <h1 className='text-4xl font-bold mb-10'>Tech Innovation Summit 2025: Shaping the Future</h1>
                            <p className='mt-3 mb-4'>The Tech Innovation Summit is a premier gathering of visionaries...</p>
                            <p className="text-2xl font-bold text-yellow-800 overflow-hidden whitespace-nowrap">
                                <span className="animate-marquee">
                                    Join the events and increase your skill
                                </span>
                            </p>
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

            <section className="extra-section mb-10 px-4">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Extra Section 1</h2>
                <p>This is the content for the first extra section. You can customize it.</p>
            </section>

            <section className="extra-section mb-10 px-4">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Extra Section 2</h2>
                <p>This is the content for the second extra section. Customize as needed.</p>
            </section>
        </div>
    );
};

export default Home;
