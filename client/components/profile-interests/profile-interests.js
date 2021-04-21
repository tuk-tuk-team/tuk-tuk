import React, {Component} from 'react';

export default class Interests extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        const {interests} = this.props;
        return (
            <div className = 'profile-page-interests'>
                <h2>Інтереси</h2>
                <div className = 'profile-page-interests-div'>
                    {interests.map((item) => 
                        <div key = {item.id} className = 'profile-page-interest-tag btn'>
                            <span>{item.value}</span>
                        </div>
                    )}
                </div>
            </div>
        );
    };
}
