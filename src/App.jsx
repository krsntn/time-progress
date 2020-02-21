import React, { useState, useEffect, useCallback } from 'react';
import css from './App.module.scss';
import {
  calcLongYears,
  calcYear,
  calcQuarter,
  calcMonth,
  calcWeek,
  calcToday,
  calcHour,
  calcActualDate,
  calcMonthWeekDay,
  calcLastSpecificDayOfMonth,
} from './js/calc';
import Progress from './components/ProgressBar';
import Switch from './components/Switch';

const defaultValue = { percentage: 0, days: 0 };

const App = () => {
  const [now, setNow] = useState(new Date().toLocaleString());
  const [centuryData, setCenturyData] = useState(defaultValue);
  const [decadeData, setDecadeData] = useState(defaultValue);
  const [yearData, setYearData] = useState(defaultValue);
  const [quarterData, setQuarterData] = useState(defaultValue);
  const [monthData, setMonthData] = useState(defaultValue);
  const [weekData, setWeekData] = useState(defaultValue);
  const [todayData, setTodayData] = useState(defaultValue);
  const [hourData, setHourData] = useState(defaultValue);
  const [valentineData, setValentineData] = useState(defaultValue);
  const [singlesData, setSinglesData] = useState(defaultValue);
  const [fathersDayData, setFathersDayData] = useState(defaultValue);
  const [mothersDayData, setMothersDayData] = useState(defaultValue);
  const [christmasData, setChristmasData] = useState(defaultValue);
  const [halloweenData, setHalloweenData] = useState(defaultValue);
  const [blackFridayData, setBlackFridayData] = useState(defaultValue);
  const [myBirthdayData, setMyBirthdayData] = useState(defaultValue);
  const [showDays, setShowDays] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setNow(now.toLocaleString());
      setCenturyData(calcLongYears(now, 100));
      setDecadeData(calcLongYears(now, 10));
      setYearData(calcYear(now));
      setQuarterData(calcQuarter(now));
      setMonthData(calcMonth(now));
      setWeekData(calcWeek(now));
      setTodayData(calcToday(now));
      setHourData(calcHour(now));
      setValentineData(calcActualDate(now, '2/14'));
      setSinglesData(calcActualDate(now, '11/11'));
      setFathersDayData(calcMonthWeekDay(now, 6, 3, 7));
      setMothersDayData(calcMonthWeekDay(now, 5, 2, 7));
      setChristmasData(calcActualDate(now, '12/25'));
      setHalloweenData(calcActualDate(now, '10/31'));
      setBlackFridayData(calcLastSpecificDayOfMonth(now, 11, 5));
      setMyBirthdayData(calcActualDate(now, '6/16'));
    }, 1000);
  }, []);

  const toggleSwitch = useCallback(() => {
    setShowDays(!showDays);
  }, [showDays]);

  return (
    <div className={css.App}>
      <div className="container">
        <div className={css.box}>
          <div className={css.titleDiv}>
            <div className={css.bigTitle}>📈 Progress</div>
            <Switch isChecked={showDays} toggleSwitch={toggleSwitch} />
          </div>
          <div className={css.bigDescription}>{now}</div>

          <Progress
            title="🌎 Hour"
            data={hourData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="🌎 Today"
            data={todayData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="👨‍💼 Week"
            data={weekData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="📅 Month"
            data={monthData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="🌘 Quarter"
            data={quarterData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="🎆 Year"
            data={yearData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="🌠 Decade"
            data={decadeData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="🌌 Century"
            data={centuryData}
            showDiff={showDays}
          ></Progress>

          <hr />

          <Progress
            title="💑 Next Valentine's Day"
            data={valentineData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="👩🏻 Next Mother's Day"
            data={mothersDayData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="👨🏻 Next Father's Day"
            data={fathersDayData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="👻 Next Halloween"
            data={halloweenData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="🧍‍♂️ Next Singles' Day"
            data={singlesData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="🖤 Next Black Friday"
            data={blackFridayData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="🎅🏻 Next Christmas"
            data={christmasData}
            showDiff={showDays}
          ></Progress>

          <hr />

          <Progress
            title="🎂 My Birthday"
            data={myBirthdayData}
            showDiff={showDays}
          ></Progress>

          <div></div>
          <div className={css.footer}>
            <div>The only progress bar you'd rather see go slower.</div>
            <div>
              Made by <a href="https://github.com/krsntn">Karson.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
