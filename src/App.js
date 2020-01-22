import React, { useState, useEffect } from 'react';
import css from './App.module.scss';
import { calcYear, calcQuarter, calcMonth, calcWeek, calcDay } from './js/calc';
import Progress from './components/Progress';

function App() {
	const [now, setNow] = useState(new Date().toLocaleString());
	const [yearPercent, setYearPercent] = useState(0);
	const [quarterPercent, setQuarterPercent] = useState(0);
	const [monthPercent, setMonthPercent] = useState(0);
	const [weekPercent, setWeekPercent] = useState(0);
	const [dayPercent, setDayPercent] = useState(0);

	useEffect(() => {
		setInterval(() => {
			const newTime = new Date();
			setNow(newTime.toLocaleString());
			setYearPercent(formatValue(false, calcYear(newTime)));
			setQuarterPercent(formatValue(false, calcQuarter(newTime)));
			setMonthPercent(formatValue(false, calcMonth(newTime)));
			setWeekPercent(formatValue(false, calcWeek(newTime)));
			setDayPercent(formatValue(true, calcDay()));
		}, 1000);
	}, []);

	return (
		<div className={css.App}>
			<div className="container">
				<div className={css.box}>
					<div className={css.bigTitle}>Progress</div>
					<div className={css.bigDescription}>{now}</div>
					<Progress title="Year" percentage={yearPercent}></Progress>
					<Progress title="Quater" percentage={quarterPercent}></Progress>
					<Progress title="Month" percentage={monthPercent}></Progress>
					<Progress title="Week" percentage={weekPercent}></Progress>
					<Progress title="Today" percentage={dayPercent}></Progress>

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
}

function formatValue(showDecimal, value) {
	return showDecimal ? value.toFixed(4) : Math.floor(value);
}

export default App;
