import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Heading, Label, InputBar, Button } from './Styled';

const getData = () => {
	return JSON.parse(localStorage.getItem('users'));
};
const hasAccount = ({ userName, userPassword }) => {
	let data = getData();
	if (data === null) return false;
	return data.some(({ name, password }) => {
		return name == userName && password == userPassword;
	});
};
const isIncomplete = ({ userName, userPassword }) => {
	if (userName == '' || userPassword == '') return true;
	else return false;
};

export default function Login() {
	const [isLoggedIn, updateIsLoggedIn] = useState(false);
	const [userInput, updateUserInput] = useState({
		userName: '',
		userPassword: '',
	});
	const handleSubmit = event => {
		event.preventDefault();
		if (isIncomplete(userInput)) {
			alert('Please complete the form');
		} else if (hasAccount(userInput)) {
			updateIsLoggedIn(true);
		} else {
			alert("Account doesn't exist, Sign-up to join!");
		}
		updateUserInput({
			userName: '',
			userPassword: '',
		});
	};
	const handleUserName = event => {
		let value = event.target.value;
		let newInput = { ...userInput };
		newInput.userName = value;
		updateUserInput(newInput);
	};
	const handlePassword = event => {
		let value = event.target.value;
		let newInput = { ...userInput };
		newInput.userPassword = value;
		updateUserInput(newInput);
	};
	return (
		<>
			{isLoggedIn && <Redirect to="/welcome" />}
			<Form onSubmit={handleSubmit}>
				<Heading>Log In</Heading>
				<Label>
					Username
					<InputBar type="text" value={userInput.userName} onChange={handleUserName} />
				</Label>
				<Label>
					Password
					<InputBar type="password" value={userInput.userPassword} onChange={handlePassword} />
				</Label>
				<p className="forgot-password">
					Forgot password? <Link to="/password">Click here</Link>
				</p>
				<Button type="submit">Submit</Button>
				<p className="sign-up">
					No Account yet? <Link to="/signup">Sign up!</Link>
				</p>
			</Form>
		</>
	);
}
