import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Service from '../../services';

import PostDetails from '../post-details';
import Spinner from '../spinner';

export default class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false
        }
        this.service = new Service();
    }

    componentDidMount() {
        this.service.getPostById(this.props.match.params.id)
            .then(data => {
                if (!data.error) {
                    this.setState({
                        ...data,
                        loading: false
                    });
                } else {
                    this.setState({
                        error: true,
                        loading: false,
                        errorMessage: 'Оголошення не знайдено'
                    })
                }
            });
    }

	render() {
        if (this.state.loading) {
            return (
                <div className="mt-5">
                    <Spinner />
                </div>
            )
        }

        const {
            postId,
            type,
            title,
            description,
            district,
            location,
            ownerPhone,
            price,
            originLink,
            date
        } = this.state;
        
		return <PostDetails
            postId={postId}
            type={type}
            title={title}
            description={description}
            district={district}
            location={location}
            ownerPhone={ownerPhone}
            price={price}
            originLink={originLink}
            date={date}
            involvedUsers = {[{id: 'asadd', avatar: 'avatar2.png', username: 'zirael'}, {id: 'asdscadd', avatar: 'avatar2.png', username: 'leaf'}, {id: 'asbnbfadd', avatar: 'avatar2.png', username: 'reaper'}]}
            photos = {[{id: 'adosddjia', src: '/images/1.jpg'}, {id: 'asdscadgngnd', src: '/images/2.jpg'}, {id: 'asbnbfadsdad', src: '/images/3.jpg'}]}
        />
	}
}

// export default withRouter(PostPage);