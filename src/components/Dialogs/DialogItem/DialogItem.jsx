import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<div className={s.dialog + ' ' + s.active}>	
			<div className={s.dialogsItems__item}>
				<NavLink to={path}>{props.name}</NavLink>
			</div>
		</div>
	)
}

export default DialogItem;