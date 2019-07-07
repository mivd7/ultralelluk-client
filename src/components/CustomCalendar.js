import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
// import ExampleControlSlot from '../ExampleControlSlot'

const CustomCalendar = ({ localizer, events, defaultDate, views }) => {
  const handleSelect = (x) => {console.log(x)}

    return (
      <div className="calendar-container">
        {/* <ExampleControlSlot.Entry waitForOutlet>
          <strong>
            Click an event to see more info, or drag the mouse over the calendar
            to select a date/time range.
          </strong>
        </ExampleControlSlot.Entry> */}
        <Calendar
          selectable
          localizer={localizer}
          events={events}
          views={views}
          step={60}
          showMultiDayTimes
          defaultDate={new Date(2019, 7, 7)}
      />
      </div>
    )
}
export default CustomCalendar