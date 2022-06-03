import Layout from '@/components/Layout';
import EventItem from '@/components/EventItem';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useEffect, useState } from 'react';

export default function EventsPage({ dataValid }) {
  const [events, setEvents] = useState([]);
  //and here we have same object printend in browser for it is client side

  useEffect(() => {
    setEvents(dataValid);
  }, [dataValid]);
  return (
    <Layout title='Home'>
      <div>
        <h1 style={{ color: '#b0b0b0' }}>Upcoming events</h1>
        {events.length === 0 && <h3>no events to show</h3>}
        {events.map((event, idx) => (
          <EventItem key={idx} event={event} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // const res = await fetch(`${API_URL}/api/events`);
  // const events = await res.json();
  //we get console log printed in terminal because its server side here

  const eventsCollection = collection(db, 'events');
  const data = await getDocs(eventsCollection);
  const dataValid = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: { dataValid },
    revalidate: 10,
  };
}
//if data is cahnged its gonna refresh because it changes on each request
//if it was getStaticProps - it would not autorefresh because
//it will fetch at build time
//if getStaticProps - add revalidate so it will know that it has to refresh
