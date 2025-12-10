import { getFeaturedEvents } from './../helpers/data';
import EventList from '../components/events/event-list';

async function HomePage(props) {
  console.log("props.events", props.events);
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps(){
  const events = await getFeaturedEvents();
  return {
    props: {
      events: events
    }
  }

}

export default HomePage;
