import ProjectCard from './ProjectCard';
import image from '../../images/andrey-metelev-DEuansgqjns-unsplash (1).jpg';
import image2 from '../../images/andrew-neel-cckf4TsHAuw-unsplash.jpg';
import image3 from '../../images/markus-spiske-tT3sKoUxLJA-unsplash.jpg';
import image4 from '../../images/that-s-her-business-R4sP8_Bq0Bw-unsplash.jpg';
import image5 from '../../images/towfiqu-barbhuiya-3g26gniC_l0-unsplash.jpg';

const Projects = () => {
	const projects = [
		{
			id: 0,
			title: 'Todo List (React)',
			description: 'Create a todo list',
			coverImage: image4,
			link: 'https://github.com/gkojunior/ctd-react-albatross',
		},
		{
			id: 1,
			title: 'Blog (React)',
			description: 'Hey check out my blog!',
			coverImage: image2,
			link: 'https://github.com/gkojunior/hacker-stories',
		},

		{
			id: 2,
			title: 'Porfolio (JavaScript)',
			description: 'My first portfolio using JS!',
			coverImage: image3,
			link: 'https://github.com/gkojunior/intro-to-programming-asteroid',
		},
		{
			id: 3,
			title: 'Number Guessing Game (React)',
			description: 'Guessing game!',
			coverImage: image,
			link: 'https://github.com/gkojunior/ctd-react-numberGuessingAssignment',
		},
		{
			id: 4,
			title: 'Guessing Game (JavaScript)',
			description: 'Guessing game!',
			coverImage: image,
			link: 'https://github.com/gkojunior/intro-to-programming-section-5-Guessing-Game',
		},
		{
			id: 5,
			title: 'Title Coming Soon (Ruby)',
			description: 'Coming Soon',
			coverImage: image5,
			link: '#/',
		},
	];
	
	return (
		<div id='projects'>
			<h2>Projects</h2>
			<div>
				<ul className='project_flex_container'>
					{projects.map((item, index) => (
						<li className='project_flexbox_item' >
							<ProjectCard key={item.id} {...item} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Projects;
