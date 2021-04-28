import React, { Component } from 'react';
import EditPostForm from '../post-edit-page';

export default class EditPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="new-post">
                <h1>Редагувати оголошення</h1>
                <EditPostForm />
            </div>
        )
    }
}