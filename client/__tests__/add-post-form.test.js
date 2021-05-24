import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import {waitFor} from '@testing-library/react';
import PostService from '../services/post-service'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AddPostForm from '../components/add-post-form/add-post-form';


Enzyme.configure({ adapter: new Adapter() });
jest.mock('../services/post-service');

describe('AddPostForm tests', ()=>{

    it('component renders correctly', () => {
        shallow(<AddPostForm/>)
    });

    describe('Functions tests', ()=>{

        it('test onInputChange function', () => {
            const component = shallow(<AddPostForm />);
            
            component.find('input[name="type"]').at(0).simulate('change', { target: { name: 'type', value: 1 }});
            expect(component.state('type')).toBe(1);
    
            component.find('input[name="title"]').simulate('change', { target: { name: 'title', value: 'CityName' }});
            expect(component.state('title')).toBe("CityName");

            component.find('input[name="address"]').simulate('change', { target: { name: 'address', value: 'Address' }});
            expect(component.state('address')).toBe("Address");

            component.find('input[name="price"]').simulate('change', { target: { name: 'price', value: 25 }});
            expect(component.state('price')).toBe(25);
        });

        it('test onSubmit function', async () => {
            const createPost = jest.fn();
            
            PostService.prototype.createPost = async function(body){
                return await createPost();
            }

            createPost.mockReturnValue({ postId:1 });

            const historyMock = { replace: jest.fn() };
            const component = shallow(<AddPostForm history={historyMock}/>);

            // checks branch at state.type === 1 where originLink is true
            component.setState({originLink: 'Zelda'});
            component.find('button').props().onClick({ preventDefault () {} });
            await waitFor(() =>  expect(historyMock.replace.mock.calls[0]).toEqual(["/posts/1"]));

            // checks branch at state.type === 1 where originLink is false
            component.setState({originLink: ''});
            component.find('button').props().onClick({ preventDefault () {} });
            await waitFor(() =>  expect(historyMock.replace.mock.calls[0]).toEqual(["/posts/1"]));

            //checks  branch at state.type === 2
            component.setState({type: 2});
            component.find('button').props().onClick({ preventDefault () {} });
            await waitFor(() =>  expect(historyMock.replace.mock.calls[0]).toEqual(["/posts/1"]));
        });
    });


    it('Checks onChange with state.type === 1', () => {
        const onInputChangeMock = jest.fn();

        AddPostForm.prototype.onInputChange = onInputChangeMock;

        let component = shallow(<AddPostForm />);
        component.find('input').first().simulate('change', { target: { value: 'custom' }});

        expect(onInputChangeMock).toHaveBeenCalled();
    });

    it('Checks onChange with state.type === 2', () => {
        const onInputChangeMock = jest.fn();

        AddPostForm.prototype.onInputChange = onInputChangeMock;

        let component = shallow(<AddPostForm />);

        component.find('input').first().simulate('change', { target: { value: 'custom' }});
        component.setState({type: 2});
        component.update();

        expect(onInputChangeMock).toHaveBeenCalled();
    });

    it("Checks onSubmit button", ()=>{
        const onSubmitMock = jest.fn();

        AddPostForm.prototype.onSubmit = onSubmitMock;

        //the only button is with Submit
        let component = shallow(<AddPostForm />);
        component.find('button').simulate('click');

        expect(onSubmitMock).toHaveBeenCalled();
    });
});