import React, { useContext } from 'react';
import './index.scss';
import { DataContext } from './../../context/DataContext';
const ListDetails = () => {
	const { tasks, setTasks } = useContext(DataContext);
	return (
		<>
			{tasks.length > 0 && (
				<div className='details'>
					<span className='details__text'>
						{tasks.length} {`item${tasks.length > 1 ? 's' : ''}`} left
					</span>
					<button
						className='details__button'
						onClick={() => {
							setTasks((state) => state.filter((task) => !task.completed));
						}}
					>
						Clear Completed
					</button>
				</div>
			)}
		</>
	);
};

export default ListDetails;
