import React from 'react'
import { Calendar } from 'react-big-calendar'

const CustomCalendar = ({ localizer, events, views }) => {
  //to do event details popup window + edit & delete function!
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
          onSelectSlot={() => {}}
      />
      </div>
    )
}
export default CustomCalendar