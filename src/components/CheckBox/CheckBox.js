import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../../models';

import './index.scss';
const CheckBox = ({ id = null, completed }) => {
	const { tasks, setTasks } = useContext(DataContext);
	const toggleCompleted = async () => {
		const post = await DataStore.query(Todo, id);
		console.log(post);
		DataStore.save(
			Todo.copyOf(post, (updated) => {
				updated.completed = !post.completed;
			})
		);
	};

	return (
		<div className='checkbox'>
			<input
				type='checkbox'
				id={id}
				className='checkbox__input'
				checked={completed}
				onChange={() => {}}
			/>
			<label
				htmlFor={id}
				className='checkbox__button'
				onClick={() => {
					if (id !== null) {
						// const tempTasks = [...tasks];
						// const tempTask = tempTasks.findIndex((task) => task.id === id);
						// tempTasks[tempTask].completed = !tempTasks[tempTask].completed;
						// setTasks(tempTasks);
						toggleCompleted();
					}
				}}
			>
				<span className='checkbox__icon'>&nbsp;</span>
			</label>
		</div>
	);
};

export default CheckBox;
