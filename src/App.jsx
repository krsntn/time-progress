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
  calcFromTo,
} from './js/calc';
import Progress from './components/ProgressBar';
import Switch from './components/Switch';
import VerticalProgressBar from './components/VerticalProgressBar';
import { Timer } from 'ez-timer';

const defaultValue = { percentage: 0, days: 0 };

// const list = [
//   {
//     id: 'mco',
//     emoji: '😷',
//     title: 'MCO',
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '👩‍⚕️',
//     title: 'World Cancer Day',
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '💑',
//     title: "Valentine's Day",
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '🙋‍♀️',
//     title: "Int. Women's Day",
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '🤡',
//     title: "April Fools' Day",
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '🌎',
//     title: 'Earth Day',
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '👷‍♂️',
//     title: 'Labour Day',
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '✨',
//     title: 'Star Wars Day',
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '👩🏻',
//     title: "Mother's Day",
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '👨🏻',
//     title: "Father's Day",
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '🇺🇸',
//     title: 'Independence Day',
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '🇯🇵',
//     title: '2020 Summer Olympics',
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '👻',
//     title: 'Halloween',
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '🚶‍♂️',
//     title: "️Singles' Day",
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '🖤',
//     title: 'Black Friday',
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '🎅🏻',
//     title: 'Christmas',
//     data: {},
//     showDiff: true,
//   },
//   {
//     emoji: '🎉',
//     title: 'New Year',
//     data: {},
//     showDiff: true,
//   },
// ];

const App = () => {
  const [mco, setMCO] = useState(defaultValue);
  const [millenniumData, setMillenniumData] = useState(defaultValue);
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
  const [olympicsData, setOlympicsData] = useState(defaultValue);
  const [halloweenData, setHalloweenData] = useState(defaultValue);
  const [blackFridayData, setBlackFridayData] = useState(defaultValue);
  const [starWarsDayData, setStarWarsDayData] = useState(defaultValue);
  const [aprilFoolData, setAprilFoolData] = useState(defaultValue);
  const [labourDayData, setLabourDayData] = useState(defaultValue);
  const [worldCancerDayData, setWorldCancerDayData] = useState(defaultValue);
  const [earthDayData, setEarthDayData] = useState(defaultValue);
  const [independenceDayData, setIndependenceDayData] = useState(defaultValue);
  const [myBirthdayData, setMyBirthdayData] = useState(defaultValue);
  const [showDays, setShowDays] = useState(false);
  const [dots, setDots] = useState('');

  const updateProgress = useCallback((now) => {
    setDots('.'.repeat(now.getSeconds() % 4));
    setMCO(calcFromTo('2020/3/18', now, '2021/1/1'));
    setMillenniumData(calcLongYears(now, 1000));
    setCenturyData(calcLongYears(now, 100));
    setDecadeData(calcLongYears(now, 10));
    setYearData(calcYear(now));
    setQuarterData(calcQuarter(now));
    setMonthData(calcMonth(now));
    setWeekData(calcWeek(now));
    setTodayData(calcToday(now));
    setHourData(calcHour(now));
    setValentineData(calcActualDate(now, 14, 2));
    setWomenData(calcActualDate(now, 8, 3));
    setSinglesData(calcActualDate(now, 11, 11));
    setFathersDayData(calcMonthWeekDay(now, 6, 3, 7));
    setMothersDayData(calcMonthWeekDay(now, 5, 2, 7));
    setChristmasData(calcActualDate(now, 25, 12));
    setOlympicsData(calcActualDate(now, 23, 7, 2021));
    setHalloweenData(calcActualDate(now, 31, 10));
    setBlackFridayData(calcLastSpecificDayOfMonth(now, 11, 5));
    setStarWarsDayData(calcActualDate(now, 4, 5));
    setAprilFoolData(calcActualDate(now, 1, 4));
    setLabourDayData(calcActualDate(now, 1, 5));
    setWorldCancerDayData(calcActualDate(now, 4, 2));
    setEarthDayData(calcActualDate(now, 22, 4));
    setIndependenceDayData(calcActualDate(now, 4, 7));
    setMyBirthdayData(calcActualDate(now, 16, 6));
  }, []);

  useEffect(() => {
    const timer = new Timer(() => {
      const time = new Date();
      updateProgress(time);
    }, 1000);
    timer.start();

    return () => timer.stop();
  }, [updateProgress]);

  const toggleSwitch = useCallback(() => {
    setShowDays(!showDays);
  }, [showDays]);

  return (
    <div className={css.App}>
      <Helmet>
        <title>Time Progress{dots}</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <VerticalProgressBar />
      <div className={`container ${css.main}`}>
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
          <div className={css.bigDescription}>
            {new Date().toLocaleString()}
          </div>

          <Progress
            emoji="😷"
            title="MCO"
            data={mco}
            showDiff={showDays}
            // outbreak
          />

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
          <Progress
            emoji="🏞"
            title="Millennium"
            data={millenniumData}
            showDiff={showDays}
          />

          <hr />

          <Progress
            emoji="👩‍⚕️"
            title="World Cancer Day"
            data={worldCancerDayData}
            showDiff={showDays}
          />
          <Progress
            emoji="💑"
            title="Valentine's Day"
            data={valentineData}
            showDiff={showDays}
          />
          <Progress
            emoji="🙋‍♀️"
            title="Int. Women's Day"
            data={womenData}
            showDiff={showDays}
          />
          <Progress
            emoji="🤡"
            title="April Fools' Day"
            data={aprilFoolData}
            showDiff={showDays}
          />
          <Progress
            emoji="🌎"
            title="Earth Day"
            data={earthDayData}
            showDiff={showDays}
          />
          <Progress
            emoji="👷‍♂️"
            title="Labour Day"
            data={labourDayData}
            showDiff={showDays}
          />
          <Progress
            emoji="✨"
            title="Star Wars Day"
            data={starWarsDayData}
            showDiff={showDays}
          />
          <Progress
            emoji="👩🏻"
            title="Mother's Day"
            data={mothersDayData}
            showDiff={showDays}
          />
          <Progress
            emoji="👨🏻"
            title="Father's Day"
            data={fathersDayData}
            showDiff={showDays}
          />
          <Progress
            emoji="🇺🇸"
            title="Independence Day"
            data={independenceDayData}
            showDiff={showDays}
          />
          <Progress
            emoji="🇯🇵"
            title="2020 Summer Olympics"
            data={olympicsData}
            showDiff={showDays}
          />
          <Progress
            emoji="👻"
            title="Halloween"
            data={halloweenData}
            showDiff={showDays}
          />
          <Progress
            emoji="🚶‍♂️"
            title="️Singles' Day"
            data={singlesData}
            showDiff={showDays}
          />
          <Progress
            emoji="🖤"
            title="Black Friday"
            data={blackFridayData}
            showDiff={showDays}
          />
          <Progress
            emoji="🎅🏻"
            title="Christmas"
            data={christmasData}
            showDiff={showDays}
          />
          <Progress
            emoji="🎉"
            title="New Year"
            data={yearData}
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
            <br />
            <div>
              Build by <a href="http://dev.krsn.xyz">karson.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
