import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<div className={s.item_space}>
				{props.message}
			</div>
			<div className={s.item_likes}>
				like: {props.likesCount}
			</div>
		</div>
	)
}

export default Post;