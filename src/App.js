import './index.scss';
import mobileLight from './images/bg-mobile-light.jpg';
import mobileDark from './images/bg-mobile-dark.jpg';
import CreateTask from './components/CreateTask/CreateTask';
import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import { DataContext } from './context/DataContext';
import Header from './components/Header/Header';
import { ThemeContext } from './context/ThemeContext';

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
	return (
		<div
			className='app'
			style={{
				backgroundImage: `url(${
					theme.selected === 'light' ? mobileLight : mobileDark
				})`,
			}}
		>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<Header />

				<DataContext.Provider value={{ tasks, setTasks }}>
					<CreateTask />
					<TaskList />
				</DataContext.Provider>
			</ThemeContext.Provider>
		</div>
	);
};

export default App;
