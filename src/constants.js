export const AUTH_TOKEN = 'auth-token'

export const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_CALENDAR_KEY}`

//`https://www.googleapis.com/calendar/v3/calendars/49fip3qh20d30jt7er6n1o30vo@group.calendar.google.com/events?key=AIzaSyBg2f1StYrGjdtUQVYBdvjEyrn78xOJAvQ`

// export function getEvents (callback) {
//   request
//     .get(url)
//     .end((err, resp) => {
//       if (!err) {
//         const events = []
//         JSON.parse(resp.text).items.map((event) => {
//           events.push({
//             start: event.start.date || event.start.dateTime,
//             end: event.end.date || event.end.dateTime,
//             title: event.summary,
//           })
//         })
//         callback(events)
//       }
//     })
// }