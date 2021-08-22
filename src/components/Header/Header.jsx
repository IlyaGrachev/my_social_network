import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.app_header}>
			<div className={s.logo}></div>

			<div className={s.loginBlock}>
				{props.isAuth
					? <div>{props.login} - <button className={s.button_auth} onClick={props.logout}>Log out</button> </div>
					: <button className={s.button_auth}><NavLink to={'/login'}>Login</NavLink></button>}
			</div>
		</header>
	)
}

export default Header;