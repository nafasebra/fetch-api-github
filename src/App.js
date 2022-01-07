import React from 'react';

// import components
import Header from './component/Header';
import Profile from './component/profile/Profile';
import Repositories from './component/repository/Repositories';
import Footer from './component/Footer';

// import css file
import './App.css';

// import react query library
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient();


function App() {
	return (
		<div className="app">
			<QueryClientProvider client={queryClient}>
				<Header />

				<div className='app__container'>
					<Profile />

					<Repositories />
				</div>

				<Footer />
			</QueryClientProvider>
		</div>
	)
}

export default App;
