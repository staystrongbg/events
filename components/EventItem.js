import Image from 'next/image';
import styles from '@/styles/EventItem.module.css';
import Link from 'next/link';
const EventItem = ({ event }) => {
  return (
    <article className={styles.eventItem}>
      <Link href={`/events/${event.id}`}>
        <a>
          <div className={styles.imageContainer}>
            <Image
              src={event.image ? event.image : '/images/event-default.png'}
              width={170}
              height={100}
              objectFit='cover'
              alt='event image'
              placeholder='blur'
              blurDataURL={event.image}
              loading='lazy'
              layout='responsive'
            />
          </div>
        </a>
      </Link>
      <div>
        <h3>{event.name}</h3>
        <p>{event.text}</p>
      </div>
    </article>
  );
};

export default EventItem;
