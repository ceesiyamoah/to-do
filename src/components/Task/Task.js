import React, { useContext } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import { ThemeContext } from '../../context/ThemeContext';
import { DataContext } from './../../context/DataContext';
import './index.scss';

const Task = ({ id, text, completed }) => {
	const { theme } = useContext(ThemeContext);
	const { tasks, setTasks } = useContext(DataContext);

	const drop = (e) => {
		e.preventDefault();
		const newPosition = e.currentTarget.id;
		const currentPosition = e.dataTransfer.getData('currentLocation_id');

		const newPositionIndex = tasks.findIndex(
			(task) => task.id === +newPosition
		);
		const currentPositionIndex = tasks.findIndex(
			(task) => task.id === +currentPosition
		);
		const tempTasks = [...tasks];

		const tempArr = tempTasks[currentPositionIndex];
		tempTasks[currentPositionIndex] = tempTasks[newPositionIndex];
		tempTasks[newPositionIndex] = tempArr;
		setTasks(tempTasks);
	};
	const dragStart = (e) => {
		e.dataTransfer.setData('currentLocation_id', e.currentTarget.id);
	};
	return (
		<div
			className='task'
			id={id}
			draggable
			onDrop={drop}
			onDragStart={dragStart}
		>
			<CheckBox id={id} completed={completed} />
			<span
				className='task__text'
				style={{
					textDecoration: completed ? 'line-through' : 'none',
					backgroundColor: theme[theme.selected].taskBgColor,
					color: theme[theme.selected].textColor,
				}}
			>
				{text}
			</span>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='task__close-icon'
				onClick={() => {
					setTasks(tasks.filter((task) => task.id !== id));
				}}
			>
				<path
					fillRule='evenodd'
					d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
				/>
			</svg>
		</div>
	);
};

export default Task;