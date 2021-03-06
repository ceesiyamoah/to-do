import React, { useContext, useState } from 'react';
import './index.scss';
import CheckBox from './../CheckBox/CheckBox';
import { ThemeContext } from '../../context/ThemeContext';
import { DataContext } from './../../context/DataContext';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../../models';

const CreateTask = () => {
	const [task, setTask] = useState('');
	const { theme } = useContext(ThemeContext);
	const { setTasks } = useContext(DataContext);

	return (
		<div
			className='newtask'
			style={{
				backgroundColor: theme[theme.selected].taskBgColor,
				color: theme[theme.selected].textColor,
			}}
		>
			<CheckBox completed={false} />

			<form
				className='newtask__form'
				onSubmit={(e) => {
					e.preventDefault();
					setTasks((state) => [
						{
							id: Math.random() * 99999,
							task,
							completed: false,
						},
						...state,
					]);
					setTask('');
					DataStore.save(
						new Todo({
							task,
							completed: false,
						})
					).then((data) => console.log(data));
				}}
			>
				<input
					type='text'
					className='newtask__input'
					placeholder='Create a new todo..'
					value={task}
					onChange={(e) => {
						setTask(e.target.value);
					}}
					required
				/>
				<button className='btn-arrow' type='submit'>
					&rarr;
				</button>
			</form>
		</div>
	);
};

export default CreateTask;
