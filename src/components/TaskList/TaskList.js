import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import CheckBox from '../CheckBox/CheckBox';
import './index.scss';
import Task from '../Task/Task';
import { ThemeContext } from '../../context/ThemeContext';
import ListDetails from '../ListDetails/ListDetails';
import FilterTasks from '../FilterTasks/FilterTasks';
const TaskList = () => {
	const { tasks, setTasks } = useContext(DataContext);
	const { theme } = useContext(ThemeContext);

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
					{tasks.map((item) => (
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
