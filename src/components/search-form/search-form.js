import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './search-form.css';

export default class SearchForm extends Component {
	render() {
		return (
			<form id="search-posts">
				<div className="search-input-block">
					<input
						className="search-text"
						type="text"
						name="text"
						placeholder="Пошук..."
					></input>
					<button className="button action">Пошук</button>
				</div>
				<div className="search-filters">
					<Row>
						<Col lg={3} md={6}>
							<div className="filter-block">
								<h4>Тип оголошення</h4>
								<div className="form-radio">
									<input
										type="radio"
										id="type-1"
										name="post-type"
										value="flat"
										checked
									/>
									<label htmlFor="type-1">Квартира</label>
								</div>
								<div className="form-radio">
									<input
										type="radio"
										id="type-2"
										name="post-type"
										value="group"
									/>
									<label htmlFor="type-2">Група</label>
								</div>
							</div>
						</Col>
						<Col lg={3} md={6}>
							<div className="filter-block">
								<h4>Район</h4>
								<select name="district">
									<option></option>
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
						</Col>
						<Col lg={3} md={6}>
							<div className="filter-block">
								<h4>Розташування</h4>
								<input type="text" placeholder="Вулиця..." />
							</div>
						</Col>
						<Col lg={3} md={6}>
							<div className="filter-block">
								<h4>Ціна</h4>
								<div className="price-block">
									<input
										className="price-range"
										name="min-price"
										type="number"
										placeholder="Від"
										defaultValue="0"
										min="0"
									/>
									<span>-</span>
									<input
										className="price-range"
										name="max-price"
										type="number"
										placeholder="До"
										min="0"
									/>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</form>
		);
	}
}
