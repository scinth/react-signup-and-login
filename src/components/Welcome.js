import React from 'react';
import { Modal } from './Styled';
import { Link } from 'react-router-dom';

export default function Welcome() {
	return (
		<Modal>
			<h1>Welcome User!</h1>
			<Link to="/">Log out</Link>
		</Modal>
	);
}
