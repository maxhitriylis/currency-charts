import Highcharts from 'highcharts';

export default (dataUSD, dataEUR) => {
	return {
		title: {
			text: 'USD to EUR and EUR to USD exchange rate over time',
		},
		xAxis: {
			type: 'datetime',
		},
		yAxis: {
			title: {
				text: 'Exchange rate',
			},
		},
		legend: {
			enabled: false,
		},
		series: [
			{
				name: 'USD to EUR',
				data: dataUSD,
			},
			{
				name: 'EUR to USD',
				data: dataEUR,
			},
		],
	};
};
