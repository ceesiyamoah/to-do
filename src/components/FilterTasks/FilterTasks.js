import React, { useContext, useState } from 'react';
import './index.scss';
import { DataContext } from './../../context/DataContext';
import { ThemeContext } from './../../context/ThemeContext';
const FilterTasks = () => {
	const { tasks, setTasks } = useContext(DataContext);
	const { theme } = useContext(ThemeContext);
	const [checked, setChecked] = useState([true, false, false]);
	const { tempTasks, setTempTasks } = useState(tasks);
	return (
		<>
			{tasks.length > 0 && (
				<div
					className='filter'
					style={{
						backgroundColor: theme[theme.selected].taskBgColor,
						color: theme[theme.selected].textColor,
					}}
				>
					<div className='filter__selection'>
						<input
							type='radio'
							id='selection-1'
							name='selection'
							className='filter__input'
							checked={checked[0]}
							onChange={() => {
								setChecked([true, false, false]);
							}}
						/>
						<label htmlFor='selection-1' className='filter__label'>
							All
						</label>
					</div>
					<div className='filter__selection'>
						<input
							type='radio'
							id='selection-2'
							name='selection'
							className='filter__input'
							checked={checked[1]}
							onChange={() => {
								setChecked([false, true, false]);
								// setTasks((state) => tasks.filter((task) => !task.completed));
							}}
						/>
						<label htmlFor='selection-2' className='filter__label'>
							Active
						</label>
					</div>
					<div className='filter__selection'>
						<input
							type='radio'
							id='selection-3'
							name='selection'
							className='filter__input'
							checked={checked[2]}
							onChange={() => {
								setChecked([false, false, true]);
								// setTasks((state) => tasks.filter((task) => task.completed));
							}}
						/>
						<label htmlFor='selection-3' className='filter__label'>
							Completed
						</label>
					</div>
				</div>
			)}
		</>
	);
};

export default FilterTasks;
