import React, { createContext, useReducer } from 'react';

const initialState = {
	currencyEUR: [],
	currencyUSD: [],
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		const { type, payload } = action;
		switch (type) {
			case 'ADD_CURRENCY':
				const newState = {
					...state,
					currencyEUR: [...state.currencyEUR, payload.currencyEUR],
					currencyUSD: [...state.currencyUSD, payload.currencyUSD],
				};
				return newState;
			default:
				throw new Error();
		}
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
