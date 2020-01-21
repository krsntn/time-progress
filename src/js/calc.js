export const calcYear = () => {
	const today = new Date();
	const firstDate = new Date(new Date().getFullYear(), 0, 1);
	const lastDate = new Date(new Date().getFullYear(), 11, 31);

	return calcDiff(firstDate, today, lastDate);
};

export const calcQuarter = () => {
	const today = new Date();
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

	return calcDiff(firstDate, today, lastDate);
};

export const calcMonth = () => {
	const today = new Date();
	const firstDate = new Date(new Date().getFullYear(), 0, 1);
	const lastDate = new Date(
		new Date().getFullYear(),
		new Date().getMonth() + 1,
		0
	);

	return calcDiff(firstDate, today, lastDate);
};

export const calcWeek = () => {
	const now = new Date();
	const firstDate = new Date(
		new Date().setDate(
			now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1)
		)
	);
	const lastDate = new Date(new Date().setDate(firstDate.getDate() + 6));

	return calcDiff(firstDate, now, lastDate);
};

export const calcDay = () => {
	const start = new Date();
	start.setHours(0, 0, 0, 0);

	const end = new Date();
	end.setHours(23, 59, 59, 999);

	const diffTime = Math.abs(new Date() - start);
	const diffTime2 = Math.abs(end - start);

	return (diffTime / diffTime2) * 100;
};

function calcDiff(startDate, curDate, endDate) {
	const diffTime = Math.abs(curDate - startDate);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	const diffTimeInYear = Math.abs(endDate - startDate);
	const diffDaysInYear = Math.ceil(diffTimeInYear / (1000 * 60 * 60 * 24));

	return (diffDays / diffDaysInYear) * 100;
}
