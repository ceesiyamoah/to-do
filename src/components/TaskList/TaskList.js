import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import './index.scss';
import Task from '../Task/Task';
import { ThemeContext } from '../../context/ThemeContext';
import ListDetails from '../ListDetails/ListDetails';
import { FilterContext } from './../../context/FilterContext';
const TaskList = () => {
	const { tasks, setTasks } = useContext(DataContext);
	const { theme } = useContext(ThemeContext);
	const { filter } = useContext(FilterContext);
	console.log(filter);

	return (
		<>
			{tasks.length > 0 && (
				<ul
					className='list'
					style={{
						backgroundColor: theme[theme.selected].taskBgColor,
						color: theme[theme.selected].textColor,
					}}
				>
					{tasks
						.filter((item) => {
							if (filter === null) return true;
							return item.completed === filter;
						})
						.map((item) => (
							<li className='list__item' key={item.id}>
								<Task {...item} />
							</li>
						))}
					<ListDetails />
				</ul>
			)}
		</>
	);
};

export default TaskList;
