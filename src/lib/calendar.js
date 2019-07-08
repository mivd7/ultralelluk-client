import axios from 'axios'

export function setStartingPoint(dateTime) {
  let date = dateTime.split('T') 
  let splitDate = date.shift().split('-')
  splitDate.pop()
  splitDate.push('01')
  let startDate = splitDate.join('-')
  return startDate.concat('T' + date);
}

export function editRequest(eventId) {
  axios.put(`https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events/${eventId}?key=${process.env.REACT_APP_CALENDAR_KEY}`)
       .then(res => console.log(res))
       .catch(err => console.log(err))
}