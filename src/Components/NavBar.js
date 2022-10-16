import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
	const navRef = useRef();

	const showNavBar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<header>
			<h3>George Owusu Jr</h3>
			<nav ref={navRef}>
				<a href='#aboutMe'>About Me</a>
				<a
					href='https://docs.google.com/document/d/1rQEbSOAH0mHlZNtTk1lh1da3KvqVSNOKCS0HveILFWE/edit'
					target='blank'>
					Resume
				</a>
				<a href='#projects'>Projects</a>
				<a href='#skills'>Skills</a>
				<a href='#contact'>Contact Me</a>
				<button className='nav-btn nav-close-btn' onClick={showNavBar}>
					<FaTimes />
				</button>
			</nav>
			<button className='nav-btn' onClick={showNavBar}>
				<FaBars />
			</button>
		</header>
	);
};

export default NavBar;
