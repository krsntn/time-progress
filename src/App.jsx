import React, { useState, useEffect, useCallback, useMemo } from 'react';
import css from './App.module.scss';
import {
	calcYear,
	calcQuarter,
	calcMonth,
	calcWeek,
	calcDay,
	calcValentine,
	calc1111,
} from './js/calc';
import Progress from './components/ProgressBar';
import Switch from './components/Switch';

const App = () => {
	const [now, setNow] = useState(new Date().toLocaleString());
	const [yearPercent, setYearPercent] = useState(0);
	const [quarterPercent, setQuarterPercent] = useState(0);
	const [monthPercent, setMonthPercent] = useState(0);
	const [weekPercent, setWeekPercent] = useState(0);
	const [dayPercent, setDayPercent] = useState(0);
	const [valentinePercent, setValentinePercent] = useState(0);
	const [singlesPencent, setSinglesPencent] = useState(0);
	const [showDecimal, setShowDecimal] = useState(false);

	useEffect(() => {
		setInterval(() => {
			const newTime = new Date();
			setNow(newTime.toLocaleString());
			setYearPercent(calcYear(newTime));
			setQuarterPercent(calcQuarter(newTime));
			setMonthPercent(calcMonth(newTime));
			setWeekPercent(calcWeek(newTime));
			setDayPercent(calcDay());
			setValentinePercent(calcValentine(newTime));
			setSinglesPencent(calc1111(newTime));
		}, 1000);
	}, []);

	const toggleSwitch = useCallback(() => {
		setShowDecimal(!showDecimal);
	}, [showDecimal]);

	const timeValue = useMemo(() => {
		return {
			yearValue: formatValue(showDecimal, yearPercent),
			quarterValue: formatValue(showDecimal, quarterPercent),
			monthValue: formatValue(showDecimal, monthPercent),
			weekValue: formatValue(showDecimal, weekPercent),
			dayValue: formatValue(showDecimal, dayPercent),
			valentineValue: formatValue(showDecimal, valentinePercent),
			singlesValue: formatValue(showDecimal, singlesPencent),
		};
	}, [
		showDecimal,
		yearPercent,
		quarterPercent,
		monthPercent,
		weekPercent,
		dayPercent,
		valentinePercent,
		singlesPencent,
	]);

	return (
		<div className={css.App}>
			<div className="container">
				<div className={css.box}>
					<div className={css.titleDiv}>
						<div className={css.bigTitle}>Progress</div>
						<Switch isChecked={showDecimal} toggleSwitch={toggleSwitch} />
					</div>
					<div className={css.bigDescription}>{now}</div>

					<Progress title="Year" percentage={timeValue.yearValue}></Progress>
					<Progress
						title="Quarter"
						percentage={timeValue.quarterValue}
					></Progress>
					<Progress title="Month" percentage={timeValue.monthValue}></Progress>
					<Progress title="Week" percentage={timeValue.weekValue}></Progress>
					<Progress title="Today" percentage={timeValue.dayValue}></Progress>
					<Progress
						title="Next Valentine's Day"
						percentage={timeValue.valentineValue}
					></Progress>
					<Progress
						title="Singles' Day"
						percentage={timeValue.singlesValue}
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

const formatValue = (showDecimal, value) => {
	return showDecimal ? value.toFixed(10) : Math.floor(value);
};

export default App;
