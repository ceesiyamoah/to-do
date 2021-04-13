import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import './index.scss';
const CheckBox = ({ id = null, completed }) => {
	const { tasks, setTasks } = useContext(DataContext);

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
						const tempTasks = [...tasks];
						const tempTask = tempTasks.findIndex((task) => task.id === id);
						tempTasks[tempTask].completed = !tempTasks[tempTask].completed;
						setTasks(tempTasks);
					}
				}}
			>
				<span className='checkbox__icon'>&nbsp;</span>
			</label>
		</div>
	);
};

export default CheckBox;
