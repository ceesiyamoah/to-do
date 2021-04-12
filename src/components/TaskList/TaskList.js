import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import CheckBox from '../CheckBox/CheckBox';
import './index.scss';
import Task from './../Task';
import { ThemeContext } from '../../context/ThemeContext';
const TaskList = () => {
	const { tasks, setTasks } = useContext(DataContext);
	const { theme } = useContext(ThemeContext);
	console.log(tasks.length);
	return (
		<ul
			className='list'
			style={{
				backgroundColor: theme[theme.selected].taskBgColor,
			}}
		>
			{tasks.map((item) => (
				<li className='list__item' key={item.id}>
					<Task {...item} />
				</li>
			))}
		</ul>
	);
};

export default TaskList;
