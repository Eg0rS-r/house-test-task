import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';

import Houses from "./pages/Houses"
import ReadyHousesPage from "./pages/ReadyHousesPage"
import NotFound from "./pages/NotFound"

import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<div id="App">
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Houses />} />
					<Route path="/ready-houses" element={<ReadyHousesPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</ScrollToTop>
		</div>
	);
}

export default App;
