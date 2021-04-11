import './index.scss';
import mobileLight from './images/bg-mobile-light.jpg';
import moon from './images/icon-moon.svg';
import CreateTask from './components/CreateTask/CreateTask';
import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';

function App() {
	const [tasks, setTasks] = useState([]);
	return (
		<div className='app' style={{ backgroundImage: `url(${mobileLight})` }}>
			<header className='header'>
				<span className='header__title'>TODO</span>
				<img src={moon} alt='' className='header__icon' />
			</header>
			<CreateTask />
			<TaskList />
		</div>
	);
}

export default App;
