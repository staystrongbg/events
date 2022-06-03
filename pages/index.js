import Layout from '@/components/Layout';
import EventItem from '@/components/EventItem';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
export default function Home({ dataValid }) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    setEvents(dataValid);
  }, [dataValid]);
  //and here we have same object printend in browser for it is client side
  return (
    <Layout title='Home'>
      <div>
        <h1 style={{ color: '#b0b0b0' }}>Upcoming events</h1>
        {events.length === 0 && <h3>no events to show</h3>}
        {events.slice(0, 3).map((event, idx) => (
          <EventItem key={idx} event={event} />
        ))}
        <Link href='/events'>
          <a style={{ color: '#d2d2d2', fontWeight: 'bold' }}>
            See all events {'>>'}
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // const res = await fetch(`${API_URL}/api/events`);
  // const events = await res.json();
  const eventsCollection = collection(db, 'events');
  const data = await getDocs(eventsCollection);
  //we get console log printed in terminal because its server side here
  const dataValid = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: { dataValid },
  };
}
//if data is cahnged its gonna refresh because it changes on each request
//if it was getStaticProps - it would not autorefresh because
//it will fetch at build time
//if getStaticProps - add revalidate so it will know that it has to refresh
