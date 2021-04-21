import React, { Component } from 'react';
import EditPostForm from '../post-edit-page';
import Service from '../../services';
import Spinner from '../spinner';

export default class EditPost extends Component {
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
        

        return (
            <div className="new-post">
                <h1>Редагувати оголошення</h1>
                <EditPostForm postId={postId}
                    type={type}
                    title={title}
                    description={description}
                    district={district}
                    location={location}
                    ownerPhone={ownerPhone}
                    price={price}
                    originLink={originLink}
                    date={date}/>
            </div>
        )
    }
}