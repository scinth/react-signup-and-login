import React, { useEffect } from 'react';
import Login from './Login';
import Password from './Password';
import Signup from './Signup';
import Welcome from './Welcome';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
	useEffect(() => {
		localStorage.setItem('users', '[]');
		return () => {
			localStorage.removeItem('users');
		};
	}, []);

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/welcome" component={Welcome} />
				<Route path="/signup" component={Signup} />
				<Route path="/password" component={Password} />
				<Route exact path="/" component={Login} />
			</Switch>
		</BrowserRouter>
	);
}
