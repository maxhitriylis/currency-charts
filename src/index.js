import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './store/store';

const app = (
	<React.StrictMode>
		<StateProvider>
			<App />
		</StateProvider>
	</React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
