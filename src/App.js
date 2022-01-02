import React from 'react';

// import components
import Header from './component/Header';
import Profile from './component/profile/Profile';
import Repositories from './component/repository/Repositories';

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
		</div>
	)
}

export default App;
