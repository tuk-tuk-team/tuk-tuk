import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Service from '../../services';
import Spinner from '../spinner';
import './post-edit-page.css';

class EditPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false
        };

        this.service = new Service();

        this.onTypeChange = this.onTypeChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
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

    onTypeChange(e) {
        switch(e.target.id) {
            case 'type-1':
                this.setState({ type: 1 });
                break;
            case 'type-2':
                this.setState({ type: 2 });
                break;
            default:
                break;
        }
    }

    onInputChange(e) {
        const target = e.target;
        switch (target.name) {
            case 'title':
                this.setState({ title: target.value });
                break;
            case 'description':
                this.setState({ description: target.value });
                break;
            case 'district':
                this.setState({ district: target.value });
                break;
            case 'address':
                this.setState({ address: target.value });
                break;
            case 'ownerPhone':
                this.setState({ ownerPhone: target.value });
                break;
            case 'price':
                this.setState({ price: target.value });
                break;
            case 'originLink':
                this.setState({ originLink: target.value });
                break;
            default:
                break;
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const body = this.state.type === 1 ? {
            ...this.state,
            originLink: this.state.originLink ? this.state.originLink : null
        } : {
            ...this.state,
            district: null,
            address: null,
            ownerPhone: null,
            price: null,
            originLink: null
        };

        this.service.editPost(this.state.postId, body)
            .then(data => {
                this.props.history.replace(`/posts/${data.postId}`);
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

        const view = this.state.type === 1 ? this.flatView() : this.groupView();

        return (
            <form id="add-post" method="PUT">
                <div className="post-input-block">
                    <h4>Тип оголошення</h4>
                    <div className="form-radio">
                        <input
                            type="radio"
                            id="type-1"
                            name="postType"
                            value="flat"
                            defaultChecked
                            onChange={this.onTypeChange}
                        />
                        <label htmlFor="type-1">Пошук співмешканця</label>
                    </div>
                    <div className="form-radio">
                        <input
                            type="radio"
                            id="type-2"
                            name="postType"
                            value="group"
                            onChange={this.onTypeChange}
                        />
                        <label htmlFor="type-2">Пошук групи</label>
                    </div>
                </div>
                { view }
                <button
                    className="button action"
                    type="submit"
                    onClick={this.onSubmit}
                >Зберегти</button>
            </form>
        )
    }

    flatView() {
        return (
            <>
                <div className="post-input-block">
                    <h4>Назва</h4>
                    <input
                        value={this.state.title}
                        type="text"
                        name="title"
                        placeholder="Назва оголошення..."
                        maxLength="255"
                        required
                        onChange={this.onInputChange}
                    ></input>
                </div>
                <div className="post-input-block">
                    <h4>Опис</h4>
                    <textarea
                        value={this.state.description}
                        name="description"
                        placeholder="Опис оголошення..."
                        onChange={this.onInputChange}
                        required
                    ></textarea>
                </div>
                <div className="post-input-block">
                    <h4>Район</h4>
                    <select
                        value={this.state.district}
                        name="district"
                        onChange={this.onInputChange}
                        required
                    >
                        <option>Голосіївський</option>
                        <option>Дарницький</option>
                        <option>Деснянський</option>
                        <option>Дніпровський</option>
                        <option>Оболонський</option>
                        <option>Печерський</option>
                        <option>Подільский</option>
                        <option>Святошинський</option>
                        <option>Солом'янський</option>
                        <option>Шевченківський</option>
                    </select>
                </div>
                <div className="post-input-block">
                    <h4>Адреса</h4>
                    <input
                        value={this.state.address}
                        type="text"
                        name="address"
                        placeholder="Адреса..."
                        maxLength="255"
                        onChange={this.onInputChange}
                        required
                    ></input>
                </div>
                <div className="post-input-block">
                    <h4>Номер телефону власника квартири</h4>
                    <input
                        value={this.state.ownerPhone}
                        type="tel"
                        name="ownerPhone"
                        placeholder="+380952225566"
                        maxLength="13"
                        onChange={this.onInputChange}
                    ></input>
                </div>
                <div className="post-input-block">
                    <h4>Ціна</h4>
                    <input
                        value={this.state.price}
                        type="number"
                        name="price"
                        placeholder="Ціна..."
                        maxLength="13"
                        onChange={this.onInputChange}
                        required
                    ></input>
                </div>
                <div className="post-input-block">
                    <h4>Оригінальне оголошення</h4>
                    <input
                        value={this.state.originLink}
                        type="text"
                        name="originLink"
                        placeholder="Посилання на оголошення..."
                        onChange={this.onInputChange}
                    ></input>
                </div>
            </>
        )
    }
    
    groupView() {
        return (
            <>
                <div className="post-input-block">
                    <h4>Назва</h4>
                    <input
                        value={this.state.title}
                        type="text"
                        name="title"
                        placeholder="Назва оголошення..."
                        maxLength="255"
                        onChange={this.onInputChange}
                        required
                    ></input>
                </div>
                <div className="post-input-block">
                    <h4>Опис</h4>
                    <textarea
                        value={this.state.description}
                        name="description"
                        placeholder="Опис оголошення..."
                        onChange={this.onInputChange}
                        required
                    ></textarea>
                </div>
            </>
        )
    }
}

export default withRouter(EditPostForm);