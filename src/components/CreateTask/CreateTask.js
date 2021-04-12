import React, { useContext, useState } from 'react';
import './index.scss';
import CheckBox from './../CheckBox/CheckBox';
import { ThemeContext } from '../../context/ThemeContext';

const CreateTask = () => {
	const [task, setTask] = useState('');
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className='newtask'
			style={{
				backgroundColor: theme[theme.selected].taskBgColor,
				color: theme[theme.selected].textColor,
			}}
		>
			<CheckBox id='new' completed={false} />

			<input
				type='text'
				className='newtask__input'
				placeholder='Create a new todo..'
				value={task}
				onChange={(e) => {
					setTask(e.target.value);
				}}
			/>
		</div>
	);
};

export default CreateTask;
