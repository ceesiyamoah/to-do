import React, { useContext } from 'react';
import './index.scss';
import { DataContext } from './../../context/DataContext';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { Todo } from '../../models';
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
							setTasks(tasks.filter((task) => !task.completed));
							DataStore.delete(Todo, Predicates.ALL);
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
