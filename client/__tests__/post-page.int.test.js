import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import fetchMock from 'jest-fetch-mock';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BrowserRouter as Router } from 'react-router-dom';

import Spinner from '../components/spinner/spinner';
import PostService from '../services/post-service';
import PostPage from '../components/pages/post-page';
import BtnLike from '../components/btn-like/btn-like';
import PostDetails from '../components/post-details/post-details';
import { formatDate } from '../modules/index';

fetchMock.enableMocks();
Enzyme.configure({ adapter: new Adapter() });

describe('PostPage tests', () => {
	beforeEach(() => {
		fetch.resetMocks();
		fetch.mockResponseOnce(JSON.stringify({ str: 'Hello' }));
	});

	it('component PostPage renders correctly', () => {
		shallow(<PostPage match={{ params: { id: 1 } }} />);
	});

	it('component renders correctly', () => {
		shallow(<Spinner />);
	});

	it('formatDate works correctly', () => {
		const time = new Date(Date.UTC(2021, 5, 25)).valueOf();
		const expectedTime = '25 червня 2021 р., 00:00';
		const actualTime = formatDate(time);

		expect(actualTime).toBe(expectedTime);
	});

	describe('PostPage tests', () => {
		it('component BtnLike renders correctly with liked = true', () => {
			let component = mount(<BtnLike liked={true} />);
			expect(component.props().liked).toBe(true);
		});

		it('component BtnLike renders correctly with liked = false', () => {
			let component = mount(<BtnLike liked={false} />);
			expect(component.props().liked).toBe(false);
		});
	});

	describe('PostDetails tests', () => {
		console.error = jest.fn();

		it('component PostDetails renders correctly with type = 1', () => {
			const props = {
				type: 1,
				date: Date.now(),
				photos: ['one', 'two'],
				originLink: 'Reaper'
			};

			const component = mount(
				<Router>
					<PostDetails {...props} />
				</Router>
			);

			component.setProps({ type: 1 });
			component.update();

			expect(component.props().type).toBe(1);
		});

		it('component PostDetails renders correctly with type = 2', () => {
			const component = mount(
				<Router>
					<PostDetails date={Date.now()} type={2} />
				</Router>
			);

			component.setProps({ type: 2 });
			component.update();

			expect(component.props().type).toBe(2);
		});
	});
});
