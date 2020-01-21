import React, { useState } from 'react';
import css from './App.module.scss';
import { calcYear, calcQuarter, calcMonth, calcWeek, calcDay } from './js/calc';
import Progress from './components/Progress';

function App() {
	const [now, setNow] = useState(new Date().toLocaleString());

	setTimeout(() => {
		setNow(new Date().toLocaleString());
	}, 1000);
	return (
		<div className={css.App}>
			<div className="container">
				<div className={css.box}>
					<div className={css.bigTitle}>Progress</div>
					<div className={css.bigDescription}>{now}</div>
					<Progress title="Year" calc={calcYear}></Progress>
					<Progress title="Quater" calc={calcQuarter}></Progress>
					<Progress title="Month" calc={calcMonth}></Progress>
					<Progress title="Week" calc={calcWeek}></Progress>
					<Progress
						title="Today"
						calc={calcDay}
						runInterval
						showDecimal
					></Progress>
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

export default App;
