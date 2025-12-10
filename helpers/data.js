
export async function getAllEvents(){

    const result = await fetch('https://nextjs-course-231b9-default-rtdb.asia-southeast1.firebasedatabase.app/events.json');

    const data = await result.json();
   
    const events = [];

    for (const key in data){
        events.push({
            id: key,
            ...data[key]
        })
    }
    console.log("events", events);
    return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}