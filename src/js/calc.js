export const calcYear = time => {
	const today = new Date(time);
	const firstDate = new Date(new Date().getFullYear(), 0, 1);
	const lastDate = new Date(new Date().getFullYear(), 11, 31);

	return calcDayDiff(firstDate, today, lastDate);
};

export const calcQuarter = time => {
	const today = new Date(time);
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

	return calcDayDiff(firstDate, today, lastDate);
};

export const calcMonth = time => {
	const today = new Date(time);
	const firstDate = new Date(new Date().getFullYear(), 0, 1);
	const lastDate = new Date(
		new Date().getFullYear(),
		new Date().getMonth() + 1,
		0
	);

	return calcDayDiff(firstDate, today, lastDate);
};

export const calcWeek = time => {
	const now = new Date(time);
	const firstDate = new Date(
		new Date().setDate(
			now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1)
		)
	);
	const lastDate = new Date(new Date().setDate(firstDate.getDate() + 6));

	return calcDayDiff(firstDate, now, lastDate);
};

export const calcDay = () => {
	const start = new Date();
	start.setHours(0, 0, 0, 0);

	const end = new Date();
	end.setHours(23, 59, 59, 999);

	const passedDay = Math.abs(new Date() - start);
	const totalDay = Math.abs(end - start);

	return (passedDay / totalDay) * 100;
};

function calcDayDiff(start, cur, end) {
	start = start.setHours(0, 0, 0, 0);
	cur = cur.setHours(0, 0, 0, 0);
	end = end.setHours(0, 0, 0, 0);

	const diffTime = Math.abs(cur - start);
	const passedDay = diffTime / (1000 * 60 * 60 * 24) + 1;

	const totalDiffInMilliseconds = Math.abs(end - start);
	const totalDay = totalDiffInMilliseconds / (1000 * 60 * 60 * 24) + 1;

	return (passedDay / totalDay) * 100;
}
