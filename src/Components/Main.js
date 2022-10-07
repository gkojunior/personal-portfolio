import { useState } from 'react';
import AboutMe from './Main/AboutMe';
import Skills from './Main/Skills'
import Projects from './Main/Projects';
import ContactMe from './Main/ContactMe';
import MessageSection from './Main/MessageSection';

const Main = () => {
	const [userMessage, setuserMessages] = useState([]);

	return (
		<div className='main'>
			<AboutMe />
			<Projects />
			<Skills />
			<ContactMe userMessage={userMessage} setuserMessages={setuserMessages} />
			<div>
				<ul className='message_flexbox_container'>
					{userMessage.map((item, index) => {
						return (
							<li className='message_flexbox_item'>
								<MessageSection
									setuserMessages={setuserMessages}
									key={index}
									{...item}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Main;
