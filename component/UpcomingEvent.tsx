import Card from "./UpcomingEvent/Card"
import Title from "./UpcomingEvent/Title"
import { upcomingEvents } from "@/data/upcomingEvent"

const UpcomingEvent = () => {
  return (
    <div id="upcoming" className="py-4 px-4 sm:px-6 lg:px-8 scroll-mt-[70px]">
      <Title />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card
              key={index}
              title={event.title}
              subtitle={event.subtitle}
              date={event.date}
              time={event.time}
              location={event.location}
              type={event.type}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvent
