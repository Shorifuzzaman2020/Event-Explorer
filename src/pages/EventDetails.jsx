
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch('/eventsData.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedEvent = data.find((event) => event.id === id);
        setEvent(selectedEvent);
      })
      .catch((error) => console.error('Error fetching event data:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    setErrorMessage('');

    setSuccessMessage('Your seat has been successfully reserved!');

    setName('');
    setEmail('');
  };

  if (!event) return <p>Loading...</p>; 

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold text-blue-600 mb-4">{event.name}</h2>
      <p className="text-xl text-gray-700 mb-2">Category: {event.category}</p>
      <p className="text-xl text-gray-700 mb-2">Date: {event.date}</p>
      <p className="text-xl text-gray-700 mb-2">Location: {event.location}</p>
      <p className="text-xl text-gray-700 mb-4">Entry Fee: {event.entry_fee}</p>
      <p className="text-lg text-gray-800 mb-6">{event.description}</p>

      {successMessage && <p className="text-green-500 text-xl">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 text-xl">{errorMessage}</p>}

     
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">Reserve Your Seat</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Reserve Seat
        </button>
      </form>
    </div>
  );
};

export default EventDetails;
//WORKING CODE