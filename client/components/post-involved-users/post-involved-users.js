import React, {Component} from 'react';
import './post-involved-users.css';


export default class InvolvedUsers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {users} = this.props;
        return (
            <div className = 'post-involved-users'>
                <h2>Люди, пов`язані з постом</h2>
                <div className = 'involved-users-container'>
                    {users.map(user => {
                        return (
                            <div key = {user.id} className = 'involved-user'>
                                <a href = '/profile'><img src = {'/images/' + user.avatar}></img></a>
                                <span>{user.username}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };
}
