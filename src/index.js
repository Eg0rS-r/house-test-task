import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import './index.css';

import App from './App';

import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<DndProvider backend={HTML5Backend}>
					<App />
				</DndProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
