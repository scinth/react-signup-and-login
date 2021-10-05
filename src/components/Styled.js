import styled from 'styled-components';

export const Form = styled.form`
	font-size: 1.3em;
	width: 80vw;
	height: max-content;
	min-width: 300px;
	max-width: 500px;
	border-radius: 0.5em;
	box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.025), 0 0 5px 1px rgba(0, 0, 0, 0.075);

	& p {
		text-align: center;
		font-family: monospace;

		&.forgot-password {
			font-size: 0.7em;
		}
		&.sign-up {
			font-size: 0.9em;
			padding-bottom: 1em;
		}
		& a {
			font-weight: bold;
		}
	}
`;

export const Heading = styled.h2`
	text-align: center;
	padding: 1em;
	color: #595;
	font-weight: bold;
`;

export const Label = styled.label`
	display: block;
	color: #333;
	margin: 1em;
	font-weight: bold;
`;

export const InputBar = styled.input`
	width: stretch;
	font-size: 1em;
	color: #222;
	padding: 0.5em 0.7em;
	margin: 0.25em;
	border: 1px solid #bbb;
	border-radius: 0.4em;
`;

export const Button = styled.button`
	display: block;
	width: stretch;
	font-size: 1.1em;
	font-weight: bold;
	padding: 0.6em;
	margin: 1em;
	text-transform: uppercase;
	border: none;
	color: white;
	background-color: #9f9;
	border-radius: 1.2em;
	cursor: pointer;

	&:hover {
		background-color: #7f7;
	}
`;

export const Modal = styled.div`
	width: 70vw;
	height: max-content;
	color: #333;
	text-align: center;
	padding: 1.5em;
	border-radius: 0.1em;
	box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3);

	& button {
		padding: 0.5em 1em;
		margin: 0.5em;
		cursor: pointer;
	}
`;
