import React from 'react'
import { Calendar } from 'react-big-calendar'
import CalendarEventDialog from './CalendarEventDialog';

const CustomCalendar = ({ localizer, events, views }) => {
  function EventDialog({ event }) {
    return (
      <div>
        {event.title}
        <CalendarEventDialog eventId={event.id}/>
    </div>
    )
  }

    return (
      <div className="calendar-container">
        <Calendar
          selectable
          localizer={localizer}
          events={events}
          views={views}
          step={60}
          showMultiDayTimes
          defaultDate={new Date()}
          components={
            {event: EventDialog}
          }
      />
      </div>
    )
}
export default CustomCalendar