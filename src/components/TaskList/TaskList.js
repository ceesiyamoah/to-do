import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import './index.scss';
const TaskList = () => {
	return (
		<ul className='list'>
			<li className='list__item'>
				<>
					<CheckBox id='test' />
					<span className='task-text'>Hllow my name is </span>
					<svg xmlns='http://www.w3.org/2000/svg' className='test'>
						<path
							// fill='#494C6B'
							fill-rule='evenodd'
							d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
						/>
					</svg>
				</>
			</li>
			<li className='list__item'>Co</li>
			<li className='list__item'>Cffe</li>
			<li className='list__item'>offe</li>
		</ul>
	);
};

export default TaskList;
