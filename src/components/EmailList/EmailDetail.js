import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

let runonce=true;
const EventDetailPage = () => {
  const { Id } = useParams(); // Extract event ID from URL params
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateItem=async()=>{
    try {
        const response = await fetch(`https://emailboxclient-default-rtdb.firebaseio.com/emails/${Id}.json`,{
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              // Add any other headers your API requires, such as authentication headers
            },
            body: JSON.stringify({
                read:true
            }),
          }); // Assuming API endpoint for fetching event details
        if (!response.ok) {
          throw new Error('Failed to fetch event');
        }
        const eventData = await response.json();
        // setEvent(eventData);
        // console.log(eventData)
      } catch (error) {
        console.error('Error fetching event:', error);
      } finally {
        setLoading(false);
      }
  }
  const getDataItem=async()=>{
    try {
        const response = await fetch(`https://emailboxclient-default-rtdb.firebaseio.com/emails/${Id}.json`); // Assuming API endpoint for fetching event details
        if (!response.ok) {
          throw new Error('Failed to fetch event');
        }
        const eventData = await response.json();
        setEvent(eventData);
        console.log(eventData)
      } catch (error) {
        console.error('Error fetching event:', error);
      } finally {
        setLoading(false);
      }
  }


  useEffect(() => {
   
        
     updateItem();
        runonce=false
    

    getDataItem();
    // Cleanup function
    return () => {
      // Optionally clean up any resources
    };
  },[]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <h6 data-testId={'hello'}>From: {`<${event.from}>`}</h6>
      <p>To:me</p>
      <div className='d-flex justify-content-between '>
        <p>subject:{event.subject}</p>
        <p>Time: {event.date}</p>
      </div>
      <h2>{event.message}</h2>
      
     
    </div>
  );
};

export default EventDetailPage;
