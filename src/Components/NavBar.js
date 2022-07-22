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
				<a href='/#'>About Me</a>
				<a href='/#'>Blog</a>
				<a href='/#'>Projects</a>
				<a href='/#'>Contact Me</a>
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
