import React, { useContext } from 'react';
import { formatISO } from 'date-fns';
import { store } from '../../store/store';
import './Table.css';

const Table = () => {
	const {
		state: { currencyEUR, currencyUSD },
		dispatch,
	} = useContext(store);
	return (
		<div className="table">
			<ul className="table-column">
				<li className="table-column-title">EUR</li>
				{currencyEUR.map(el => (
					<li className="table-column-item" key={el[1]}>
						Дата: {formatISO(new Date(el[0]), { representation: 'date' })} | Значение: {el[1]}{' '}
					</li>
				))}
			</ul>
			<ul className="table-column">
				<li className="table-column-title">USD</li>
				{currencyUSD.map(el => (
					<li className="table-column-item" key={el[1]}>
						Дата: {formatISO(new Date(el[0]), { representation: 'date' })} | Значение: {el[1]}{' '}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Table;
