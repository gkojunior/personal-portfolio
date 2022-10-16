const Skills = () => {
	const skills = [
		{
			id: 0,
			title: 'React',
		},
		{
			id: 1,
			title: 'JavaScript',
		},
		{
			id: 2,
			title: 'TypeScript',
		},
		{
			id: 3,
			title: 'Git & GitHub',
		},
		{
			id: 4,
			title: 'CSS',
		},
		{
			id: 5,
			title: 'HTML',
		},
	];

	return (
    <div className='skills' id='skills'>
      <h2>Skills</h2>
			<ul className='skills_flex_container'>
				{skills.map((skills) => {
					return <li className='skills_flex_item'>{skills.title}</li>;
				})}
			</ul>
		</div>
	);
};

export default Skills;
