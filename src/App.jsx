import React, { useState, useEffect, useCallback } from 'react';
import css from './App.module.scss';
import {
  calcYear,
  calcQuarter,
  calcMonth,
  calcWeek,
  calcToday,
  calcValentine,
  calc1111,
  calcMonthWeekDay,
} from './js/calc';
import Progress from './components/ProgressBar';
import Switch from './components/Switch';

const defaultValue = { percentage: 0, days: 0 };

const App = () => {
  const [now, setNow] = useState(new Date().toLocaleString());
  const [yearData, setYearData] = useState(defaultValue);
  const [quarterData, setQuarterData] = useState(defaultValue);
  const [monthData, setMonthData] = useState(defaultValue);
  const [weekData, setWeekData] = useState(defaultValue);
  const [todayData, setTodayData] = useState(defaultValue);
  const [valentineData, setValentineData] = useState(defaultValue);
  const [singlesData, setSinglesData] = useState(defaultValue);
  const [fathersDayData, setFathersDayData] = useState(defaultValue);
  const [mothersDayData, setMothersDayData] = useState(defaultValue);
  const [showDays, setShowDays] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const newTime = new Date();
      setNow(newTime.toLocaleString());
      setYearData(calcYear(newTime));
      setQuarterData(calcQuarter(newTime));
      setMonthData(calcMonth(newTime));
      setWeekData(calcWeek(newTime));
      setTodayData(calcToday());
      setValentineData(calcValentine(newTime));
      setSinglesData(calc1111(newTime));
      setFathersDayData(calcMonthWeekDay(newTime, 6, 3, 7));
      setMothersDayData(calcMonthWeekDay(newTime, 5, 2, 7));
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
            <div className={css.bigTitle}>Progress</div>
            <Switch isChecked={showDays} toggleSwitch={toggleSwitch} />
          </div>
          <div className={css.bigDescription}>{now}</div>

          <Progress title="Year" data={yearData} showDiff={showDays}></Progress>
          <Progress
            title="Quarter"
            data={quarterData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="Month"
            data={monthData}
            showDiff={showDays}
          ></Progress>
          <Progress title="Week" data={weekData} showDiff={showDays}></Progress>
          <Progress
            title="Today"
            data={todayData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="Next Valentine's Day"
            data={valentineData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="Singles' Day"
            data={singlesData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="Father's Day"
            data={fathersDayData}
            showDiff={showDays}
          ></Progress>
          <Progress
            title="Mother's Day"
            data={mothersDayData}
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
