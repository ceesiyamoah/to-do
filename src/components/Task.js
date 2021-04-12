import React, { useContext } from 'react';
import CheckBox from './CheckBox/CheckBox';
import { ThemeContext } from './../context/ThemeContext';
import { DataContext } from './../context/DataContext';
const Task = ({ id, text, completed }) => {
	const { theme } = useContext(ThemeContext);
	const { tasks, setTasks } = useContext(DataContext);
	return (
		<>
			<CheckBox id={id} completed={completed} />
			<span
				className='task-text'
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
				className='close-icon'
				onClick={() => {
					setTasks(tasks.filter((task) => task.id !== id));
				}}
			>
				<path
					fillRule='evenodd'
					d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
				/>
			</svg>
		</>
	);
};

export default Task;
