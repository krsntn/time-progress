export const calcLongYears = (now, years) => {
  const diff = now.getFullYear() % years;
  const start = new Date(now.getFullYear() - diff, 0, 1);
  const end = new Date(start.getFullYear() + years, 0, 1);

  return calcDayDiff(start, now, end);
};

export const calcYear = now => {
  const firstDate = new Date(new Date().getFullYear(), 0, 1);
  const lastDate = new Date(new Date().getFullYear() + 1, 0, 1);

  return calcDayDiff(firstDate, now, lastDate);
};

export const calcQuarter = now => {
  const firstDate = new Date(new Date().getFullYear(), 0, 1);

  let lastDate = new Date(new Date().getFullYear() + 1, 0, 1);

  if (now.getMonth() < 3) {
    lastDate = new Date(new Date().getFullYear(), 3, 1);
  } else if (now.getMonth() < 6) {
    lastDate = new Date(new Date().getFullYear(), 6, 1);
  } else if (now.getMonth() < 9) {
    lastDate = new Date(new Date().getFullYear(), 9, 1);
  }

  return calcDayDiff(firstDate, now, lastDate);
};

export const calcMonth = now => {
  const firstDate = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    1
  );

  return calcDayDiff(firstDate, now, lastDate);
};

export const calcWeek = now => {
  const firstDate = new Date(new Date().setDate(now.getDate() - now.getDay()));
  const lastDate = new Date(new Date().setDate(firstDate.getDate() + 7));

  return calcDayDiff(firstDate, now, lastDate);
};

export const calcToday = now => {
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);

  const end = new Date(now);
  end.setHours(23, 59, 59, 999);

  const passedDay = Math.abs(now - start);
  const totalDay = Math.abs(end - start);
  const remain = Math.floor((end - now) / (1000 * 60 * 60) + 1);

  return {
    percentage: Math.floor((passedDay / totalDay) * 100),
    days: `${remain} Hour${remain > 1 ? 's' : ''}`,
  };
};

export const calcHour = now => {
  const start = new Date(now);
  start.setHours(start.getHours(), 0, 0, 0);
  const end = new Date(now);
  end.setHours(end.getHours() + 1, 0, 0, 0);

  const passed = Math.abs(now - start);
  const total = Math.abs(end - start);
  const remain = Math.floor(Math.abs(end - now) / (1000 * 60) + 1);

  return {
    percentage: Math.floor((passed / total) * 100),
    days: `${remain} Minute${remain > 1 ? 's' : ''}`,
  };
};

export const calcLastSpecificDayOfMonth = (now, month, day) => {
  let lastYearDate = getDate(new Date(now.getFullYear() - 1, month, 0));
  let thisYearDate = getDate(new Date(now.getFullYear(), month, 0));
  let nextYearDate = getDate(new Date(now.getFullYear() + 1, month, 0));

  function getDate(date) {
    if (date.getDay() < day) {
      date.setDate(date.getDate() - 7);
    }
    date.setDate(date.getDate() - (date.getDay() - day));
    return date;
  }

  if (now < thisYearDate) {
    return calcDayDiff(lastYearDate, now, thisYearDate);
  }

  return calcDayDiff(thisYearDate, now, nextYearDate);
};

export const calcMonthWeekDay = (now, month, weekNo, day) => {
  const lastYearDate = getActualDate(
    new Date().getFullYear() - 1,
    month,
    weekNo,
    day
  );
  const thisYearDate = getActualDate(
    new Date().getFullYear(),
    month,
    weekNo,
    day
  );
  const nextYearDate = getActualDate(
    new Date().getFullYear() + 1,
    month,
    weekNo,
    day
  );

  function getActualDate(year, month, weekNo, day) {
    const firstDateOfMonth = new Date(`${year}/${month}/1`);
    const diff = day - firstDateOfMonth.getDay();
    return new Date(
      firstDateOfMonth.setDate(
        firstDateOfMonth.getDate() + diff + (weekNo - 1) * 7
      )
    );
  }

  if (now < thisYearDate) {
    return calcDayDiff(lastYearDate, now, thisYearDate);
  }

  return calcDayDiff(thisYearDate, now, nextYearDate);
};

export const calcActualDate = (now, theDate) => {
  const lastYearDate = new Date(`${now.getFullYear() - 1}/${theDate}`);
  const thisYearDate = new Date(`${now.getFullYear()}/${theDate}`);
  const nextYearDate = new Date(`${now.getFullYear() + 1}/${theDate}`);

  if (now < thisYearDate) {
    return calcDayDiff(lastYearDate, now, thisYearDate);
  }

  return calcDayDiff(thisYearDate, now, nextYearDate);
};

function calcDayDiff(start, cur, end) {
  start = start.setHours(0, 0, 0, 0);
  end = end.setHours(0, 0, 0, 0) - 1;

  const diffTime = Math.abs(cur - start);
  const totalDiffInMilliseconds = Math.abs(end - start);
  const daysLeft = Math.floor((end - cur) / (1000 * 60 * 60 * 24) + 1);

  return {
    percentage: Math.floor((diffTime / totalDiffInMilliseconds) * 100),
    days: `${daysLeft} Day${daysLeft > 1 ? 's' : ''}`,
  };
}

export function calcFromTo(start, now, end) {
  const startDate = new Date(start);
  const nowTime = new Date(now);
  const endDate = new Date(end);

  return calcDayDiff(startDate, nowTime, endDate);
}
