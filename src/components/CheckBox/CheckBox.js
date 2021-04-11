import React from 'react';
import './index.scss';
const CheckBox = ({ id }) => {
	return (
		<div className='checkbox'>
			<input type='checkbox' id={id} className='checkbox__input' />
			<label htmlFor={id} className='checkbox__button'>
				<span className='checkbox__icon'>&nbsp;</span>
			</label>
		</div>
	);
};

export default CheckBox;
