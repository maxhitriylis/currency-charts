import Highcharts from 'highcharts';

export default (dataUSD, dataEUR) => {
	return {
		chart: {
			reflow: true,
			zoomType: 'x',
		},
		title: {
			text: 'RUB to EUR and RUB to USD exchange rate over time',
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
				name: 'RUB to USD',
				data: dataUSD,
				threshold: null,
			},
			{
				name: 'RUB to EUR',
				data: dataEUR,
				threshold: null,
			},
		],
	};
};
