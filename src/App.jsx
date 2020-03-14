import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
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
  const [now, setNow] = useState(new Date());
  const [centuryData, setCenturyData] = useState(defaultValue);
  const [decadeData, setDecadeData] = useState(defaultValue);
  const [yearData, setYearData] = useState(defaultValue);
  const [quarterData, setQuarterData] = useState(defaultValue);
  const [monthData, setMonthData] = useState(defaultValue);
  const [weekData, setWeekData] = useState(defaultValue);
  const [todayData, setTodayData] = useState(defaultValue);
  const [hourData, setHourData] = useState(defaultValue);
  const [valentineData, setValentineData] = useState(defaultValue);
  const [womenData, setWomenData] = useState(defaultValue);
  const [singlesData, setSinglesData] = useState(defaultValue);
  const [fathersDayData, setFathersDayData] = useState(defaultValue);
  const [mothersDayData, setMothersDayData] = useState(defaultValue);
  const [christmasData, setChristmasData] = useState(defaultValue);
  const [halloweenData, setHalloweenData] = useState(defaultValue);
  const [blackFridayData, setBlackFridayData] = useState(defaultValue);
  const [myBirthdayData, setMyBirthdayData] = useState(defaultValue);
  const [showDays, setShowDays] = useState(false);
  const [dots, setDots] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setDots('.'.repeat(now.getSeconds() % 4));
      setCenturyData(calcLongYears(now, 100));
      setDecadeData(calcLongYears(now, 10));
      setYearData(calcYear(now));
      setQuarterData(calcQuarter(now));
      setMonthData(calcMonth(now));
      setWeekData(calcWeek(now));
      setTodayData(calcToday(now));
      setHourData(calcHour(now));
      setValentineData(calcActualDate(now, '2/14'));
      setWomenData(calcActualDate(now, '3/8'));
      setSinglesData(calcActualDate(now, '11/11'));
      setFathersDayData(calcMonthWeekDay(now, 6, 3, 7));
      setMothersDayData(calcMonthWeekDay(now, 5, 2, 7));
      setChristmasData(calcActualDate(now, '12/25'));
      setHalloweenData(calcActualDate(now, '10/31'));
      setBlackFridayData(calcLastSpecificDayOfMonth(now, 11, 5));
      setMyBirthdayData(calcActualDate(now, '6/16'));
      setNow(new Date());
    }, 1000);
  }, [now]);

  const toggleSwitch = useCallback(() => {
    setShowDays(!showDays);
  }, [showDays]);

  return (
    <div className={css.App}>
      <Helmet>
        <title>Time Progress{dots}</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <div className="container">
        <div className={css.box}>
          <div className={css.titleDiv}>
            <div className={css.bigTitle}>
              <span role="img" aria-labelledby="emoji">
                📈
              </span>{' '}
              Progress
            </div>
            <Switch isChecked={showDays} toggleSwitch={toggleSwitch} />
          </div>
          <div className={css.bigDescription}>{now.toLocaleString()}</div>

          <Progress
            emoji="🕐"
            title="Hour"
            data={hourData}
            showDiff={showDays}
          />
          <Progress
            emoji="🌎"
            title="Today"
            data={todayData}
            showDiff={showDays}
          />
          <Progress
            emoji="👨‍💼"
            title="Week"
            data={weekData}
            showDiff={showDays}
          />
          <Progress
            emoji="📅"
            title="Month"
            data={monthData}
            showDiff={showDays}
          />
          <Progress
            emoji="🌘"
            title="Quarter"
            data={quarterData}
            showDiff={showDays}
          />
          <Progress
            emoji="🎆"
            title="Year"
            data={yearData}
            showDiff={showDays}
          />
          <Progress
            emoji="🌠"
            title="Decade"
            data={decadeData}
            showDiff={showDays}
          />
          <Progress
            emoji="🌌"
            title="Century"
            data={centuryData}
            showDiff={showDays}
          />

          <hr />

          <Progress
            emoji="💑"
            title="Next Valentine's Day"
            data={valentineData}
            showDiff={showDays}
          />
          <Progress
            emoji="🙋‍♀️"
            title="Next Int. Women's Day"
            data={womenData}
            showDiff={showDays}
          />
          <Progress
            emoji="👩🏻"
            title="Next Mother's Day"
            data={mothersDayData}
            showDiff={showDays}
          />
          <Progress
            emoji="👨🏻"
            title="Next Father's Day"
            data={fathersDayData}
            showDiff={showDays}
          />
          <Progress
            emoji="👻"
            title="Next Halloween"
            data={halloweenData}
            showDiff={showDays}
          />
          <Progress
            emoji="🚶‍♂️"
            title="️Next Singles' Day"
            data={singlesData}
            showDiff={showDays}
          />
          <Progress
            emoji="🖤"
            title="Next Black Friday"
            data={blackFridayData}
            showDiff={showDays}
          />
          <Progress
            emoji="🎅🏻"
            title="Next Christmas"
            data={christmasData}
            showDiff={showDays}
          />

          <hr />

          <Progress
            emoji="🎂"
            title="My Cake Day"
            data={myBirthdayData}
            showDiff={showDays}
          />

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
