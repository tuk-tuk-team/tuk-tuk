import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import fetchMock from "jest-fetch-mock";
import PostService from '../services/post-service'

fetchMock.enableMocks();
Enzyme.configure({ adapter: new Adapter() });


describe('PostService Test', ()=>{
    
    let PS;
    beforeEach(() => {
        fetch.resetMocks();

        PS = new PostService();
    });

    it('getAllPosts is working', async () => {
        fetch.mockResponseOnce(JSON.stringify({str: "Hello"}));
        const data = await PS.getAllPosts();

        await expect(data.str).toEqual("Hello");
    });

    it('getPostById is working', async () => {
        fetch.mockResponseOnce(JSON.stringify({str: "Hello"}));
        const data = await PS.getPostById(1);

        await expect(data.str).toEqual("Hello");
    });

    it('createPost is working', async () => {
        fetch.mockResponseOnce(JSON.stringify({str: "Hello"}));
        const data = await PS.createPost({str: "Hello"});

        await expect(data.str).toEqual("Hello");
    });

    it('editPost is working', async () => {
        fetch.mockResponseOnce(JSON.stringify({str: "Hello"}));
        const data = await PS.editPost(1, {str: "Hello"});

        await expect(data.str).toEqual("Hello");
    });

    it('deletePost is working', async () => {
        fetch.mockResponseOnce(JSON.stringify({str: "Hello"}));
        const data = await PS.deletePost(1);

        await expect(data.str).toEqual("Hello");
    });
});