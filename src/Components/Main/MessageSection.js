import React from 'react';

const MessageSection = ({ name, email, date, message, setuserMessages }) => {
	return (
		<div>
			<div>{name}</div>
			<div>{email}</div>
			<div>{date}</div>
			<div>{message}</div>
			<div>
                <button onClick={() => {
                    setuserMessages((prev) => {
                        return prev.filter((item) => name !== item.name)
                    })
                }}>Remove</button>
			</div>
		</div>
	);
};

export default MessageSection;
