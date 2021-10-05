import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Heading, Label, InputBar, Button } from './Styled';

var data = JSON.parse(localStorage.getItem('users'));

export default function Signup() {
	const [isSubmit, updateIsSubmit] = useState(false);
	const [userInput, updateUserInput] = useState({
		name: '',
		password: '',
	});

	const handleSubmit = event => {
		event.preventDefault();
		if (userInput.name == '' || userInput.password == '') {
			alert('Please complete the form');
			return;
		}
		if (data === null) data = [];
		data.push(userInput);
		localStorage.setItem('users', JSON.stringify(data));
		updateIsSubmit(true);
	};
	const handleUserName = event => {
		let value = event.target.value;
		let newInput = { ...userInput };
		newInput.name = value;
		updateUserInput(newInput);
	};
	const handlePassword = event => {
		let value = event.target.value;
		let newInput = { ...userInput };
		newInput.password = value;
		updateUserInput(newInput);
	};

	return (
		<>
			{isSubmit && <Redirect to="/" />}
			<Form onSubmit={handleSubmit}>
				<Heading>Sign Up</Heading>
				<Label>
					Username
					<InputBar type="text" value={userInput.userName} onChange={handleUserName} />
				</Label>
				<Label>
					Password
					<InputBar type="password" value={userInput.userPassword} onChange={handlePassword} />
				</Label>
				<Button type="submit">Submit</Button>
				<p className="sign-up">
					Already have an account? <Link to="/">Log in!</Link>
				</p>
			</Form>
		</>
	);
}
