import React from 'react';

// import components
import Header from './component/Header';
import Profile from './component/profile/Profile';
import Repositories from './component/repository/Repositories';
import Footer from './component/Footer';

// import css file
import './App.css';


function App() {
	return (
		<div className="app">
			<Header />

			<div className='app__container'>
				<Profile />

				<Repositories />
			</div>

			<Footer />
		</div>
	)
}

export default App;
