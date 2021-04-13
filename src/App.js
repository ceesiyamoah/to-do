import './index.scss';
import mobileLight from './images/bg-mobile-light.jpg';
import mobileDark from './images/bg-mobile-dark.jpg';
import desktopDark from './images/bg-desktop-dark.jpg';
import desktopLight from './images/bg-desktop-light.jpg';
import CreateTask from './components/CreateTask/CreateTask';
import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import { DataContext } from './context/DataContext';
import Header from './components/Header/Header';
import { ThemeContext } from './context/ThemeContext';
import FilterTasks from './components/FilterTasks/FilterTasks';
import { FilterContext } from './context/FilterContext';
import { useMediaQuery } from './Hooks/useMediaQuery';

const App = () => {
	let { matches } = useMediaQuery('(max-width:375px');

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
					matches
						? theme.selected === 'light'
							? mobileLight
							: mobileDark
						: theme.selected === 'light'
						? desktopLight
						: desktopDark
				})`,
				backgroundColor: theme[theme.selected].mainBgColor,
				color: theme[theme.selected].textColor,
			}}
		>
			<div className='container'>
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
					<>
						{!matches && (
							<span className='app__notice'>Drag and drop to reorder list</span>
						)}
					</>
				) : (
					<span className='app__notice app__notice-nolist'>
						Create a new Task
					</span>
				)}
			</div>
		</div>
	);
};

export default App;
