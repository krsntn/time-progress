import React, { useState, useEffect, useCallback, useReducer } from 'react';
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

const initialState = {
  mco: {
    emoji: '😷',
    title: 'MCO',
    data: defaultValue,
  },
  hour: {
    emoji: '🕐',
    title: 'Hour',
    data: defaultValue,
  },
  today: {
    emoji: '🌎',
    title: 'Today',
    data: defaultValue,
  },
  week: {
    emoji: '👨‍💼',
    title: 'Week',
    data: defaultValue,
  },
  month: {
    emoji: '📅',
    title: 'Month',
    data: defaultValue,
  },
  quarter: {
    emoji: '🌘',
    title: 'Quarter',
    data: defaultValue,
  },
  year: {
    emoji: '🎆',
    title: 'Year',
    data: defaultValue,
  },
  decade: {
    emoji: '🌠',
    title: 'Decade',
    data: defaultValue,
  },
  century: {
    emoji: '🌌',
    title: 'Century',
    data: defaultValue,
  },
  millennium: {
    emoji: '🏞',
    title: 'Millennium',
    data: defaultValue,
  },
  worldCancer: {
    emoji: '👩‍⚕️',
    title: 'World Cancer Day',
    data: defaultValue,
    dynamic: true,
  },
  valentine: {
    emoji: '💑',
    title: "Valentine's Day",
    data: defaultValue,
    dynamic: true,
  },
  intWomen: {
    emoji: '🙋‍♀️',
    title: "Int. Women's Day",
    data: defaultValue,
    dynamic: true,
  },
  aprilFool: {
    emoji: '🤡',
    title: "April Fools' Day",
    data: defaultValue,
    dynamic: true,
  },
  earth: {
    emoji: '🌎',
    title: 'Earth Day',
    data: defaultValue,
    dynamic: true,
  },
  labour: {
    emoji: '👷‍♂️',
    title: 'Labour Day',
    data: defaultValue,
    dynamic: true,
  },
  starWars: {
    emoji: '✨',
    title: 'Star Wars Day',
    data: defaultValue,
    dynamic: true,
  },
  mother: {
    emoji: '👩🏻',
    title: "Mother's Day",
    data: defaultValue,
    dynamic: true,
  },
  father: {
    emoji: '👨🏻',
    title: "Father's Day",
    data: defaultValue,
    dynamic: true,
  },
  independence: {
    emoji: '🇺🇸',
    title: 'Independence Day',
    data: defaultValue,
    dynamic: true,
  },
  olympic: {
    emoji: '🇯🇵',
    title: '2020 Summer Olympics',
    data: defaultValue,
    dynamic: true,
  },
  halloween: {
    emoji: '👻',
    title: 'Halloween',
    data: defaultValue,
    dynamic: true,
  },
  single: {
    emoji: '🚶‍♂️',
    title: "️Singles' Day",
    data: defaultValue,
    dynamic: true,
  },
  blackFriday: {
    emoji: '🖤',
    title: 'Black Friday',
    data: defaultValue,
    dynamic: true,
  },
  christmas: {
    emoji: '🎅🏻',
    title: 'Christmas',
    data: defaultValue,
    dynamic: true,
  },
  newYear: {
    emoji: '🎉',
    title: 'New Year',
    data: defaultValue,
    dynamic: true,
  },
  cake: {
    emoji: '🎂',
    title: 'My Cake Day',
    data: defaultValue,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      const obj = {};
      Object.keys(initialState).forEach((key) => {
        obj[key] = {
          ...initialState[key],
          data: action.payload[key],
        };
      });
      return {
        ...state,
        ...obj,
      };
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showDays, setShowDays] = useState(false);
  const [dots, setDots] = useState('');

  const updateProgress = useCallback((now) => {
    setDots('.'.repeat(now.getSeconds() % 4));

    dispatch({
      type: 'update',
      payload: {
        mco: calcFromTo('2020/3/18', now, '2021/1/1'),
        hour: calcHour(now),
        today: calcToday(now),
        week: calcWeek(now),
        month: calcMonth(now),
        quarter: calcQuarter(now),
        year: calcYear(now),
        decade: calcLongYears(now, 10),
        century: calcLongYears(now, 100),
        millennium: calcLongYears(now, 1000),
        worldCancer: calcActualDate(now, 4, 2),
        valentine: calcActualDate(now, 14, 2),
        intWomen: calcActualDate(now, 8, 3),
        aprilFool: calcActualDate(now, 1, 4),
        earth: calcActualDate(now, 22, 4),
        labour: calcActualDate(now, 1, 5),
        starWars: calcActualDate(now, 4, 5),
        mother: calcMonthWeekDay(now, 5, 2, 7),
        father: calcMonthWeekDay(now, 6, 3, 7),
        independence: calcActualDate(now, 4, 7),
        olympic: calcActualDate(now, 23, 7, 2021),
        halloween: calcActualDate(now, 31, 10),
        single: calcActualDate(now, 11, 11),
        blackFriday: calcLastSpecificDayOfMonth(now, 11, 5),
        christmas: calcActualDate(now, 25, 12),
        newYear: calcYear(now),
        cake: calcActualDate(now, 16, 6),
      },
    });
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
    setShowDays((x) => !x);
  }, []);

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
            emoji={state.mco.emoji}
            title={state.mco.title}
            data={state.mco.data}
            showDiff={showDays}
          />

          <Progress
            emoji={state.hour.emoji}
            title={state.hour.title}
            data={state.hour.data}
            showDiff={showDays}
          />

          <Progress
            emoji={state.today.emoji}
            title={state.today.title}
            data={state.today.data}
            showDiff={showDays}
          />

          <Progress
            emoji={state.week.emoji}
            title={state.week.title}
            data={state.week.data}
            showDiff={showDays}
          />

          <Progress
            emoji={state.month.emoji}
            title={state.month.title}
            data={state.month.data}
            showDiff={showDays}
          />

          <Progress
            emoji={state.quarter.emoji}
            title={state.quarter.title}
            data={state.quarter.data}
            showDiff={showDays}
          />

          <Progress
            emoji={state.year.emoji}
            title={state.year.title}
            data={state.year.data}
            showDiff={showDays}
          />

          <Progress
            emoji={state.decade.emoji}
            title={state.decade.title}
            data={state.decade.data}
            showDiff={showDays}
          />

          <Progress
            emoji={state.century.emoji}
            title={state.century.title}
            data={state.century.data}
            showDiff={showDays}
          />

          <Progress
            emoji={state.millennium.emoji}
            title={state.millennium.title}
            data={state.millennium.data}
            showDiff={showDays}
          />

          <hr />

          {Object.keys(state)
            .sort((a, b) => state[a].data.days - state[b].data.days)
            .map((key) => {
              return (
                state[key].dynamic && (
                  <Progress
                    key={key}
                    emoji={state[key].emoji}
                    title={state[key].title}
                    data={state[key].data}
                    showDiff={showDays}
                  />
                )
              );
            })}

          <hr />

          <Progress
            emoji={state.cake.emoji}
            title={state.cake.title}
            data={state.cake.data}
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
