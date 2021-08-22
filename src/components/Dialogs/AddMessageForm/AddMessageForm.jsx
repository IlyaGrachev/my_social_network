import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import s from '../Dialogs.module.css';

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.dialogs__input}>
                <Field component={Input} placeholder='Enter your message' name="newMessageBody" />
				<button>Send</button>	   
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);

























