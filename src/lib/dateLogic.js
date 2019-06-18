const setDaysRange = (years) => {
  const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  return days.slice(0, years)
}

export const monthsArr = [{monthName: 'Januari', monthNo: 1, days: setDaysRange(31)}, {monthName: 'Februari', monthNo: 2, days: setDaysRange(28)},{monthName: 'Maart', monthNo: 3, days: setDaysRange(31)},
                   {monthName: 'April', monthNo: 4, days: setDaysRange(30)},{monthName:'Mei',monthNo: 5, days: setDaysRange(31)},
                   {monthName: 'Juni', monthNo: 6,  days: setDaysRange(30)},{monthName: 'Juli', monthNo: 7,  days: setDaysRange(31)},{monthName: 'Augustus', monthNo: 8, days: setDaysRange(31)},{monthName: 'September', monthNo: 9,  days: setDaysRange(30)},
                   {monthName: 'October', monthNo: 10,  days: setDaysRange(31)},{monthName: 'November',monthNo: 11,  days: setDaysRange(30)},{monthName: 'December', monthNo: 12,  days: setDaysRange(31)}]

export function setCalendar(currentYear, years, months){
    var arr = []
    var i;
    for (i = 0; i < years; i++) {
      arr.push({year: (currentYear - 1) + i, 
                months: months,
              })
      }
    return arr
}

export function getDaysByMonthNo(monthNo, monthsArr) {
  {
  var i;
  for (i = 0; i < 12; i++) { 
      if(monthsArr[i]['monthNo'] == monthNo)
      return monthsArr[i]['days'];
  }
  }
}

export function filterMonthName(months, x){
  months.filter(month => month.monthName === x)
}
