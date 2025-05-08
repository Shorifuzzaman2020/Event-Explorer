
import React, { useEffect, useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { auth } from '../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyEvents = () => {
    useDocumentTitle('My Events | Event Explorer');
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('myEvents')) || [];
        const userEmail = auth.currentUser?.email;
        const filtered = stored.filter(event => event.reservedBy.email === userEmail);
        setMyEvents(filtered);
    }, []);

    const handleCancel = (eventId) => {
        const userEmail = auth.currentUser?.email;
        const allEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

        const updatedEvents = allEvents.filter(
            event => !(event.id === eventId && event.reservedBy.email === userEmail)
        );

        localStorage.setItem('myEvents', JSON.stringify(updatedEvents));

        const updatedUserEvents = myEvents.filter(event => event.id !== eventId);
        setMyEvents(updatedUserEvents);

        toast.info('Reservation cancelled.');
    };

    return (
        <div className="p-6 max-w-5xl mx-auto bg-white shadow-md rounded-lg">
            <ToastContainer />
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">My Reserved Events</h2>
            {myEvents.length === 0 ? (
                <p className="text-lg text-gray-700">You have not reserved any events yet.</p>
            ) : (
                <ul className="space-y-4">
                    {myEvents.map((event) => (
                        <li key={event.id} className="border p-4 rounded shadow-sm relative">
                            <h3 className="text-xl font-bold text-blue-500">{event.name}</h3>
                            <p className="text-gray-700">Category: {event.category}</p>
                            <p className="text-gray-700">Date: {event.date}</p>
                            <p className="text-gray-700">Location: {event.location}</p>
                            <p className="text-gray-700">Entry Fee: {event.entry_fee}</p>
                            <p className="text-sm text-gray-600 mt-2">
                                Reserved by: {event.reservedBy.name} ({event.reservedBy.email})
                            </p>
                            <p className="text-sm text-gray-500">
                                Time: {new Date(event.reservedAt).toLocaleString()}
                            </p>
                            <button
                                onClick={() => handleCancel(event.id)}
                                className="absolute bottom-4 right-4 text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition"
                            >
                                Cancel
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyEvents;
