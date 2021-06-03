import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
Enzyme.configure({ adapter: new Adapter() });

const {
	getData,
	postData,
	editData,
	deleteData
} = require('../services/requests.js');

describe('Requests are working', () => {
	beforeEach(() => {
		fetch.resetMocks();
	});

	it('getData is working', async () => {
		fetch.mockResponseOnce(JSON.stringify({ str: 'Hello' }));
		const data = await getData('http://localhost:4000/api/posts');

		await expect(data.str).toEqual('Hello');
	});

	it('postData is working', async () => {
		const body = {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({ ex: 'any' })
		};

		fetch.mockResponseOnce(JSON.stringify(body));
		const data = await postData('http://localhost:4000/api/posts/add', body);

		await expect(data.method).toEqual('POST');
	});

	it('editData is working', async () => {
		const body = {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'PUT',
			body: JSON.stringify({ ex: 'any' })
		};

		fetch.mockResponseOnce(JSON.stringify(body));
		const data = await editData('http://localhost:4000/api/posts/1/edit', body);

		await expect(data.method).toEqual('PUT');
	});

	it('deleteData is working', async () => {
		fetch.mockResponseOnce(JSON.stringify({ str: 'Hello' }));
		const data = await deleteData('http://localhost:4000/api/posts/1/delete');

		await expect(data.str).toEqual('Hello');
	});
});

describe('Requests are handling errors', () => {
	//hides errors when handling !ok responses
	console.error = jest.fn();

	beforeEach(() => {
		fetch.resetMocks();
	});

	it('getData with error', async () => {
		fetch.mockResponseOnce(JSON.stringify({ str: 'Hello' }), { status: 400 });
		const data = await getData('http://localhost:4000/api/posts');

		await expect(data.str).toEqual('Hello');
	});

	it('postData with error', async () => {
		const body = {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({ ex: 'any' })
		};

		fetch.mockResponseOnce(JSON.stringify(body), { status: 400 });
		const data = await postData('http://localhost:4000/api/posts/add', body);

		await expect(data.method).toEqual('POST');
	});

	it('editData with error', async () => {
		const body = {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'PUT',
			body: JSON.stringify({ ex: 'any' })
		};

		fetch.mockResponseOnce(JSON.stringify(body), { status: 400 });
		const data = await editData('http://localhost:4000/api/posts/1/edit', body);

		await expect(data.method).toEqual('PUT');
	});

	it('deleteData with error', async () => {
		fetch.mockResponseOnce(JSON.stringify({ str: 'Hello' }), { status: 400 });
		const data = await deleteData('http://localhost:4000/api/posts/1/delete');

		await expect(data.str).toEqual('Hello');
	});
});
