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
  Sat ,
  Sun,
}

function isWeekend(day: string): boolean {
  return day === 'Mon' || 'Tue' || 'Wed' || 'Thu' || 'Fri' ? true : false;
}


isWeekend(DayWeeks[DayWeeks.Mon])