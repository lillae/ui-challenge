import { IoMdAddCircleOutline } from 'react-icons/io';

import OptionIcons from './option-icons';

const DashboardContent = () => {
	return (
		<div className='dashboard-content'>
			<div className='content-header'>
				<div className='header-items'>
					<p>Title</p>
					<div className='add-item'>
						<span>
							<IoMdAddCircleOutline />
						</span>

						<p>Add</p>
					</div>
				</div>
			</div>
			<div className='content-body'>
				<div className='content-item'>
					<h4>This is about Malaysia</h4>
					<OptionIcons />
				</div>
				<div className='content-item'>
					<h4>This is about Malaysia</h4>
					<OptionIcons />
				</div>
				<div className='content-item'>
					<h4>This is about Malaysia</h4>
					<OptionIcons />
				</div>
				<div className='content-item'>
					<h4>This is about Malaysia</h4>
					<OptionIcons />
				</div>
				<div className='content-item'>
					<h4>This is about Malaysia</h4>
					<OptionIcons />
				</div>
				<div className='content-item'>
					<h4>This is about Malaysia</h4>
					<OptionIcons />
				</div>
				<div className='content-item'>
					<h4>This is about Malaysia</h4>
					<OptionIcons />
				</div>
				<div className='content-item'>
					<h4>This is about Malaysia</h4>
					<OptionIcons />
				</div>
				<div className='content-item'>
					<h4>This is about Malaysia</h4>
					<OptionIcons />
				</div>
				<div className='content-item'>
					<h4>This is about Malaysia</h4>
					<OptionIcons />
				</div>
			</div>
		</div>
	);
};

export default DashboardContent;
