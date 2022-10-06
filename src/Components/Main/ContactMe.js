import React, { useState } from 'react';

const ContactMe = ({ setMessages, setuserMessages }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState(Date.now());
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'name':
				setName(e.target.value);
				return;
			case 'email':
				setEmail(e.target.value);
				return;
			case 'date':
				setDate(e.target.value);
				return;
			case 'message':
				setMessage(e.target.value);
				return;
			default:
				return;
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setuserMessages((previousState) => {
			return [...previousState, { name, email, date, message }];
		});

		setName('');
		setEmail('');
		setDate(Date.now);
		setMessage('');
	};

	return (
		<section id='contact' className='formContainer'>
			<h3>Send a message!</h3>
			<form id='post-form' onSubmit={handleSubmit}>
				<label htmlFor='name'>Name:</label>
				<input
					name='name'
					id='name'
					type='text'
					onChange={handleChange}
					value={name}
				/>

				<label htmlFor='email'>Email:</label>
				<input
					name='email'
					id='email'
					type='text'
					onChange={handleChange}
					value={email}
				/>

				<label htmlFor='date'>Date:</label>
				<input
					name='date'
					id='date'
					type='date'
					onChange={handleChange}
					value={date}
				/>
				<label htmlFor='message'>Message:</label>
				<textarea
					name='message'
					id='message'
					type='text'
					onChange={handleChange}
					value={message}></textarea>
				<button type='submit' className='button'>
					Submit
				</button>
			</form>
		</section>
	);
};

export default ContactMe;
