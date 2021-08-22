import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return(
		<div className={s.dialog}>
			<div className={s.dialog__item}>
				{props.message}
			</div>
			
		</div>
	) 
}

export default Message;