const Sidebar = () => {
	const sidebarMap = [
		{ name: 'Articles' },
		{ name: 'Users' },
		{ name: 'Profiles' },
	];
	return (
		<div className='sidebar'>
			<strong>Dashboard</strong>
			<ul>
				{sidebarMap.map((links, index) => (
					<li key={index}>
						<button>{links.name}</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
