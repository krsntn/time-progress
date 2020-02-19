export const calcYear = time => {
  const today = new Date(time);
  const firstDate = new Date(new Date().getFullYear(), 0, 1);
  const lastDate = new Date(new Date().getFullYear() + 1, 0, 1);

  return calcDayDiff(firstDate, today, lastDate);
};

export const calcQuarter = time => {
  const today = new Date(time);
  const firstDate = new Date(new Date().getFullYear(), 0, 1);

  let lastDate = new Date(new Date().getFullYear() + 1, 0, 1);

  if (today.getMonth() < 3) {
    lastDate = new Date(new Date().getFullYear(), 3, 1);
  } else if (today.getMonth() < 6) {
    lastDate = new Date(new Date().getFullYear(), 6, 1);
  } else if (today.getMonth() < 9) {
    lastDate = new Date(new Date().getFullYear(), 9, 1);
  }

  return calcDayDiff(firstDate, today, lastDate);
};

export const calcMonth = time => {
  const today = new Date(time);
  const firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    1
  );

  return calcDayDiff(firstDate, today, lastDate);
};

export const calcWeek = time => {
  const now = new Date(time);
  const firstDate = new Date(
    new Date().setDate(
      now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 0)
    )
  );
  const lastDate = new Date(new Date().setDate(firstDate.getDate() + 7));

  return calcDayDiff(firstDate, now, lastDate);
};

export const calcToday = () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const cur = new Date();

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const passedDay = Math.abs(cur - start);
  const totalDay = Math.abs(end - start);
  const minuteLeft = Math.floor((end - cur) / (1000 * 60) + 1);

  return {
    percentage: Math.floor((passedDay / totalDay) * 100),
    days: `${minuteLeft} Minute${minuteLeft > 1 && 's'}`,
  };
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
    days: `${daysLeft} Day${daysLeft > 1 && 's'}`,
  };
}
