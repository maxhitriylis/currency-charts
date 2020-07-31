import React, { useState, useMemo, useContext } from 'react';
import { store } from '../../store/store';
import { useInterval } from '../../helpers/hooks/useInterval';
import { getIsoDates } from '../../helpers/getIsoDates';
import getChartConfig from '../../helpers/getChartConfig';
import HighchartsReact from 'highcharts-react-official';
import './Chart.css';

const RESEND_TIME = 0;

const Chart = () => {
	const [count, setCount] = useState(RESEND_TIME);
	const [isRunning, setIsRunning] = useState(true);
	const datesISO = useMemo(() => getIsoDates(30), []);
	const { state: { currencyUSD, currencyEUR }, dispatch } = useContext(store);

	useInterval(
		async () => {
			if (count === 30) {
				setCount(RESEND_TIME);

				return setIsRunning(false);
			}
			const resultEUR = await fetch(`https://api.exchangeratesapi.io/${datesISO[count]}?base=USD&symbols=EUR`);
			const resultUSD = await fetch(`https://api.exchangeratesapi.io/${datesISO[count]}?base=EUR&symbols=USD`);
			const {
				date: dateEUR,
				rates: { EUR: ratesEUR },
			} = await resultEUR.json();
			const {
				date: dateUSD,
				rates: { USD: ratesUSD },
			} = await resultUSD.json();
			dispatch({
				type: 'ADD_CURRENCY',
				payload: {
					currencyEUR: [new Date(dateEUR).getTime(), ratesEUR],
					currencyUSD: [new Date(dateUSD).getTime(), ratesUSD],
				},
			});
			return setCount(count + 1);
		},
		isRunning ? 1000 : null
	);

	return (
		<div className="chart">
			<HighchartsReact options={getChartConfig(currencyUSD, currencyEUR)} />
		</div>
	);
};

export default Chart;
