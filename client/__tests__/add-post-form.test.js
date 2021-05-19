import React from 'react';
import AddPostForm from '../components/add-post-form/add-post-form'
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('AddPostFormTest', ()=>{

    it('renders without crashing', () => {
        shallow(<AddPostForm/>)
    });

    it('test default props of class', () => {
        const wrapper = shallow(<AddPostForm />);
        expect(wrapper.state('type')).toBe(1);
      })

    it('test onInputChange method', () => {
        const onInputChangeMock = jest.fn();

        AddPostForm.prototype.onInputChange = onInputChangeMock;

        let component = shallow(<AddPostForm />);
        component.find('input').first().simulate('change', { target: { value: 'custom' }});


        expect(onInputChangeMock).toHaveBeenCalled();
    });

    it("test onSubmit method", ()=>{
        const onSubmitMock = jest.fn();

        AddPostForm.prototype.onSubmit = onSubmitMock;

        let component = shallow(<AddPostForm />);
        component.find('button').props().onClick();

        expect(onSubmitMock).toHaveBeenCalled();
    });

   
});


    






