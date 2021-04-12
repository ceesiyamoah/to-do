import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import moon from './../../images/icon-moon.svg';
import sun from './../../images/icon-sun.svg';
import './index.scss';

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<>
			<header className='header'>
				<span className='header__title'>TODO</span>
				<img
					src={theme.selected !== 'light' ? sun : moon}
					alt=''
					className='header__icon'
					onClick={() => {
						const tempTheme = { ...theme };
						tempTheme.selected =
							tempTheme.selected === 'light' ? 'dark' : 'light';
						setTheme(tempTheme);
					}}
				/>
			</header>
		</>
	);
};

export default Header;
