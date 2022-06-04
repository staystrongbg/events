import Layout from '@/components/Layout';
import styles from '@/styles/Event.module.css';
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';
import Image from 'next/image';
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';
export const FlexContainer = ({ style, children }) => {
  return (
    <div
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </div>
  );
};
const Event = ({ evt }) => {
  const EditItem = () => {
    console.log('edit');
  };
  const deleteItem = () => {
    console.log('delete');
  };

  return (
    <>
      <Layout title={evt.name}>
        <article className={styles.eventItem}>
          <div className={styles.imageContainer}>
            <Image
              src={evt.image ? evt.image : '/images/event-default.png'}
              width={960}
              height={600}
              alt=''
              placeholder='blur'
              blurDataURL={evt.image ? evt.image : '/images/event-default.png'}
              loading='eager'
              layout='responsive'
              objectFit='cover'
            />
          </div>

          <div>
            <FlexContainer>
              <h1>{evt.name}</h1>
              <div className={styles.controls}>
                <span onClick={deleteItem}>
                  <FaTrashAlt />
                </span>
                <span onClick={EditItem}>
                  <FaPenAlt />
                </span>
              </div>
            </FlexContainer>
            <p>{evt.text}</p>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default Event;

export async function getServerSideProps(context) {
  const eventsCollection = collection(db, 'events');
  const data = await getDocs(eventsCollection);
  const dataTemp = data.docs
    .map((doc) => ({ ...doc.data(), id: doc.id }))
    .find((ev) => ev.id === context.params.id);

  return {
    props: { evt: dataTemp },
  };
}
