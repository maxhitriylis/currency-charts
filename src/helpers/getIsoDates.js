import { addDays, eachDayOfInterval, formatISO } from 'date-fns';

export const getIsoDates = (fromDay) => {
	const dates = eachDayOfInterval({ start: addDays(new Date(), -fromDay), end: new Date() });
	const datesISO = dates.map(el => formatISO(el, { representation: 'date' }));
	return datesISO;
}