export const calcYear = time => {
  const today = new Date(time);
  const firstDate = new Date(new Date().getFullYear(), 0, 1);
  const lastDate = new Date(new Date().getFullYear(), 11, 31);

  return calcDayDiff(firstDate, today, lastDate);
};

export const calcQuarter = time => {
  const today = new Date(time);
  const firstDate = new Date(new Date().getFullYear(), 0, 1);

  let endMonth = 0;
  let endDate = 31;

  if (today.getMonth() < 3) {
    endMonth = 2;
  } else if (today.getMonth() < 6) {
    endMonth = 5;
  } else if (today.getMonth() < 9) {
    endMonth = 8;
    endDate = 30;
  } else {
    endMonth = 11;
  }

  const lastDate = new Date(new Date().getFullYear(), endMonth, endDate);

  return calcDayDiff(firstDate, today, lastDate);
};

export const calcMonth = time => {
  const today = new Date(time);
  const firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  );

  return calcDayDiff(firstDate, today, lastDate);
};

export const calcWeek = time => {
  const now = new Date(time);
  const firstDate = new Date(
    new Date().setDate(
      now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1)
    )
  );
  const lastDate = new Date(new Date().setDate(firstDate.getDate() + 6));

  return calcDayDiff(firstDate, now, lastDate);
};

export const calcDay = () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const passedDay = Math.abs(new Date() - start);
  const totalDay = Math.abs(end - start);

  return (passedDay / totalDay) * 100;
};

export const calcValentine = now => {
  return calcActualDate(now, '2/14');
};

export const calc1111 = now => {
  return calcActualDate(now, '11/11');
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

function calcActualDate(now, theDate) {
  const lastYearDate = new Date(`${now.getFullYear() - 1}/${theDate}`);
  const thisYearDate = new Date(`${now.getFullYear()}/${theDate}`);
  const nextYearDate = new Date(`${now.getFullYear() + 1}/${theDate}`);

  if (now < thisYearDate) {
    return calcDayDiff(lastYearDate, now, thisYearDate);
  }

  return calcDayDiff(thisYearDate, now, nextYearDate);
}

function calcDayDiff(start, cur, end) {
  start = start.setHours(0, 0, 0, 0);
  end = end.setHours(23, 59, 59, 999);

  const diffTime = Math.abs(cur - start);
  const totalDiffInMilliseconds = Math.abs(end - start);

  return (diffTime / totalDiffInMilliseconds) * 100;
}
