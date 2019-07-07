export function setStartingPoint(dateTime) {
  let date = dateTime.split('T') 
  let splitDate = date.shift().split('-')
  splitDate.pop()
  splitDate.push('01')
  let startDate = splitDate.join('-')
  return startDate.concat('T' + date);
}