import './index.scss';
import mobileLight from './images/bg-mobile-light.jpg';
import mobileDark from './images/bg-mobile-dark.jpg';
import CreateTask from './components/CreateTask/CreateTask';
import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import { DataContext } from './context/DataContext';
import Header from './components/Header/Header';
import { ThemeContext } from './context/ThemeContext';
import FilterTasks from './components/FilterTasks/FilterTasks';
import CheckBox from './components/CheckBox/CheckBox';
import { FilterContext } from './context/FilterContext';

const App = () => {
	const [tasks, setTasks] = useState([
		{ id: 1, text: 'Learn react', completed: false },
		{ id: 2, text: 'Learn mongo', completed: true },
		{ id: 3, text: 'Learn scss', completed: false },
		{ id: 4, text: 'Learn html', completed: false },
		{ id: 5, text: 'Learn C++', completed: false },
		{ id: 6, text: 'Learn node', completed: false },
	]);
	const [theme, setTheme] = useState({
		selected: 'light',
		light: {
			taskBgColor: 'hsl(0, 0%, 98%)',
			mainBgColor: 'hsl(236, 33%, 92%)',
			textColor: 'hsl(235, 19%, 35%)',
		},
		dark: {
			mainBgColor: 'hsl(235, 21%, 11%)',
			taskBgColor: 'hsl(233, 14%, 35%)',
			textColor: 'hsl(234, 39%, 85%)',
		},
	});
	const [filter, setFilter] = useState(null);
	return (
		<div
			className='app'
			style={{
				backgroundImage: `url(${
					theme.selected === 'light' ? mobileLight : mobileDark
				})`,
				backgroundColor: theme[theme.selected].taskBgColor,
				color: theme[theme.selected].textColor,
			}}
		>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<Header />
				<DataContext.Provider value={{ tasks, setTasks }}>
					<CreateTask />
					<FilterContext.Provider value={{ filter, setFilter }}>
						<TaskList />
						<FilterTasks />
					</FilterContext.Provider>
				</DataContext.Provider>
			</ThemeContext.Provider>
			{tasks.length > 0 ? (
				<span className='app__notice'>Drag and drop to reorder list</span>
			) : (
				<span className='app__notice app__notice-nolist'>
					Create a new Task
				</span>
			)}
		</div>
	);
};

export default App;
