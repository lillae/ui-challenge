import { DashboardContent, Sidebar } from '.';

const DashboardContainer = () => {
	return (
		<section className='dashboard-wrapper'>
			<h2>Articles</h2>
			<div className='dashboard'>
				<Sidebar />
				<DashboardContent />
			</div>
		</section>
	);
};

export default DashboardContainer;
