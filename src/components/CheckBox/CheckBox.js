import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import './index.scss';
const CheckBox = ({ id, completed, setCompleted }) => {
	const { tasks, setTasks } = useContext(DataContext);
	return (
		<div className='checkbox'>
			<input
				type='checkbox'
				id={id}
				className='checkbox__input'
				checked={completed}
				onChange={() => {
					const tempTasks = [...tasks];
					const tempTask = tempTasks.find((task) => task.id === id);
					tempTask.completed = !tempTask.completed;
					setTasks(tempTasks);
				}}
			/>
			<label htmlFor={id} className='checkbox__button'>
				<span className='checkbox__icon'>&nbsp;</span>
			</label>
		</div>
	);
};

export default CheckBox;
