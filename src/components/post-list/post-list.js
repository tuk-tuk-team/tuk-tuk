import React, { Component } from 'react';
import { Row } from 'reactstrap';
import PostCard from '../post-card';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };

        this.onLike = this.onLike.bind(this);
    }

    componentDidMount() {
        this.setState({
            posts: [
                {
                    id: 0,
                    type: "flat",
                    title: "Шукаю співмешканця, будемо круто жити",
                    price: "5600",
                    district: "Шевченківський",
                    img: "https://via.placeholder.com/1920x1080",
                    liked: false
                },
                {
                    id: 1,
                    type: "group",
					title: "Шукаю позитивну людину, разом знайдему квартиру",
                    liked: false
                }
            ]
        });
    }

    onLike(id) {
        this.setState(({posts}) => {
            const clonedPosts = [...posts];
            clonedPosts[id].liked = !clonedPosts[id].liked;
            return clonedPosts;
        });
    }

	render() {
		return (
			<div className="feed-posts-block">
				<ul className="post-list">
					<Row>
                        {
                            this.state.posts.map(post => {
                                const { id, type, title, price, district, img, liked } = post;
                                return <PostCard
                                    key={id}
                                    type={type}
                                    title={title}
                                    price={price}
                                    district={district}
                                    img={img}
                                    liked={liked}
                                    onLike={() => this.onLike(id)}
                                />
                            })
                        }
					</Row>
				</ul>
			</div>
		);
	}
}
