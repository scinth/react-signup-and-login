import React from 'react';
import { Modal } from './Styled';
import { useHistory } from 'react-router-dom';

export default function Password() {
	const { goBack } = useHistory();
	return (
		<Modal>
			<h1>Forgot Password Page</h1>
			<button onClick={() => goBack()}>Go back</button>
		</Modal>
	);
}
