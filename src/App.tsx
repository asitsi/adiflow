import React, { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
const Home = lazy(()=>import('./pages/Home'))
const ContactUs = lazy(()=>import('./pages/ContactUs'))

function App() {
	return (
		<>
			<Suspense fallback={<h1 className="loading">Loading...</h1>}>
				<Routes>
					<Route
						path={'/'}
						element={<Home />}
					/>
					<Route
						path={'/contact'}
						element={<ContactUs />}
					/>
					<Route
						path={'*'}
						element={<Home />}
					/>
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
