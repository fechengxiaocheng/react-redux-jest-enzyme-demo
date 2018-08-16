import React from 'react';
import TodoItem from './index';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        key: 1,
        todo: '123',
        id: 1,
        deleteTodo: jest.fn()
    };
    const wrapper = shallow(<TodoItem {...props} />);

    return {
        wrapper,
        props
    };
};

describe('components', () => {
    describe('TodoItem', () => {
        it('被渲染成功', () => {
            const { wrapper } = setup();
            expect(wrapper.find('li').length).toBe(1);
        });
        it('监听click的时候，执行deleteTodo方法', () => {
            const { wrapper, props } = setup();
            wrapper.find('li').simulate('click');
            expect(props.deleteTodo).toBeCalled();
        });
        it('li的显示值，必须是跟props中传入的一致', () => {
            const { wrapper, props } = setup();
            expect(wrapper.find('li').text()).toBe(props.todo);
        });
    });
});
