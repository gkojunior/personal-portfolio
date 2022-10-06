const ProjectCard = ({ title, coverImage, description, link }) => {
	return (
		<div className='project_card'>
			<div>
				<a href={link} target='blank'>
					<img width='200' src={coverImage} alt='' />
				</a>
				<h3>{title}</h3>
				<p>{description}</p>
				<a className='button' href={link} target='blank'>
					See More
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
