/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayWeeks {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

function isWeekend(day: DayWeeks): boolean {
  return day === DayWeeks.Sat || day === DayWeeks.Sun
}


isWeekend(DayWeeks.Mon)