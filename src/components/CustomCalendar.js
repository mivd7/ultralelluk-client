import React from 'react'
import { Calendar } from 'react-big-calendar'
import CalendarEventDialog from './CalendarEventDialog';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

const CustomCalendar = ({ localizer, events, views }) => {
  const [open, setOpen] = React.useState(true)
  //to do event details popup window + edit & delete function!

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

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
          onSelectEvent={() => handleClickOpen()}
          components={
            {event: EventDialog}
          }
      />
      </div>
    )
}
export default CustomCalendar