import React, { useState } from 'react';
import './index.scss';
import CheckBox from './../CheckBox/CheckBox';

const CreateTask = () => {
	const [task, setTask] = useState('');
	return (
		<div className='newtask'>
			<>
				<CheckBox id='new' />
			</>

			<input
				type='text'
				className='newtask__input'
				placeholder='Create a new todo..'
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
		</div>
	);
};

export default CreateTask;
