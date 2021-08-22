import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
	return (
		<div className={s.user__card}>
			<div>
				<div>
					<NavLink to={'/profile/' + user.id}>
						<img alt="ава юзера" src={user.photos.small != null ? user.photos.small : userPhoto}
							className={s.user__card_photo} />
					</NavLink>
				</div>
			</div>

			<div className={s.user__card_name}>{user.name}</div>

			<div>
				{user.followed
					? <button className={s.user__card_button} disabled={followingInProgress
						.some(id => id === user.id)}
						onClick={() => { unfollow(user.id) }}>
						Unfollow</button>
					: <button className={s.user__card_button} disabled={followingInProgress.some(id => id === user.id)}
						onClick={() => { follow(user.id) }}>
						Follow</button>}

			</div>


		</div>
	)
}

export default User;