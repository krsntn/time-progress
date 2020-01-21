import React, { useState } from 'react';
import css from '../App.module.scss';

export default function Progress(props) {
	const { title, calc, runInterval, showDecimal } = props;
	const [percentage, setPercentage] = useState(
		formatValue(showDecimal, calc())
	);

	if (runInterval) {
		setTimeout(() => {
			setPercentage(formatValue(showDecimal, calc()));
		}, 1000);
	}

	return (
		<div className={css.element}>
			<div className={css.title}>
				<div>{title}</div>
				<div>{percentage}%</div>
			</div>
			<div className="progress" style={{ backgroundColor: '#ddd' }}>
				<div
					className="progress-bar bg-primary"
					role="progressbar"
					style={{
						width: `${percentage}%`,
					}}
				></div>
			</div>
		</div>
	);
}

function formatValue(showDecimal, value) {
	return showDecimal ? value.toFixed(4) : Math.floor(value);
}
