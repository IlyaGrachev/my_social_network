import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";

let AddNewPostForm = (props) => {
	return (
		<form className={s.postsBlock__addForm_form} onSubmit={props.handleSubmit}>
			<Field name="newPostText" component="input" placeholder="Post message"/>
			{/*<Field name="newPostText" component={Input} placeholder={"Post message"}
				validate={[required, maxLength10]} />*/}
			<button>Add post</button>
		</form>
	)
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = React.memo(props => {
	let postsElements =
		[...props.posts]
			.reverse()
			.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

	//let newPostElement = React.createRef();

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div className={s.postsBlock__addForm}>
				<AddNewPostFormRedux onSubmit={onAddPost} />
			</div>

			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
});

export default MyPosts;