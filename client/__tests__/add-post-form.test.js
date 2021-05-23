import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AddPostForm from '../components/add-post-form/add-post-form';
import PostService from '../services/post-service'


Enzyme.configure({ adapter: new Adapter() });
jest.mock('../services/post-service');

describe('AddPostFormTest', ()=>{

    it('renders correctly', () => {
        shallow(<AddPostForm/>)
    });

    describe('Functions tests', ()=>{

        it('test onInputChange function', () => {
            const component = shallow(<AddPostForm />);
            
            component.find('input[name="type"]').at(0).simulate('change', { target: { name: 'type', value: 1 }});
            expect(component.state('type')).toBe(1);
    
            component.find('input[name="title"]').simulate('change', { target: { name: 'title', value: 'CityName' }});
            expect(component.state('title')).toBe("CityName");

            component.find('input[name="address"]').simulate('change', { target: { name: 'address', value: 'Adress' }});
            expect(component.state('address')).toBe("Adress");

            component.find('input[name="price"]').simulate('change', { target: { name: 'price', value: 25 }});
            expect(component.state('price')).toBe(25);
        });

        

    });


    it('Check onChange with state.type === 1', () => {
        const onInputChangeMock = jest.fn();

        AddPostForm.prototype.onInputChange = onInputChangeMock;

        let component = shallow(<AddPostForm />);
        component.find('input').first().simulate('change', { target: { value: 'custom' }});


        expect(onInputChangeMock).toHaveBeenCalled();
    });

    it('Check onChange with state.type === 2', () => {
        const onInputChangeMock = jest.fn();

        AddPostForm.prototype.onInputChange = onInputChangeMock;

        let component = shallow(<AddPostForm />);

        component.find('input').first().simulate('change', { target: { value: 'custom' }});
        component.setState({type: null});
        component.update();

        expect(onInputChangeMock).toHaveBeenCalled();
    });

    it("Check onSubmit button", ()=>{
        const onSubmitMock = jest.fn();

        AddPostForm.prototype.onSubmit = onSubmitMock;

        let component = shallow(<AddPostForm />);
        component.find('button').props().onClick();

        expect(onSubmitMock).toHaveBeenCalled();
    });

});