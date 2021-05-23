import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NewPostPage from "../components/pages/new-post-page";

Enzyme.configure({ adapter: new Adapter() });

describe('AddPostFormTest', ()=>{
    it('renders correctly', () => {
        shallow(<NewPostPage/>)
    });
});