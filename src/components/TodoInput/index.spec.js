// 1、引入相关包

import React from 'react';
import TodoInput from './index.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
configure({ adapter: new Adapter() })

// 2、setup函数创建组建的虚拟dom <TodoInput addTodo={this.addTodo} />

const setup = () => {
    const props = {
        addTodo: jest.fn()
    };
    const wrapper = shallow(<TodoInput {...props} />);
    return {
        wrapper,
        props
    }
}

// 3、当keydowm数据的时候，执行addTodo
describe('components', () => {
    describe('TodoInput', () => {
        it('当keydown有数据的时候，执行addTodo', () => {
            const { wrapper, props } = setup();
            const mockObj = {
                keyCode: 13,
                target: {
                    value: 'TEST'
                }
            };
            wrapper.find('input').simulate('keydown', mockObj);
            expect(props.addTodo).toBeCalled();
        })
        
        it('keydow时候没有数据的时候，不会执行addTodo', () => {
            const { wrapper, props } = setup();
            const mockObj = {
                keyCode: 13,
                target: {
                    value: ''
                }
            };
            wrapper.find('input').simulate('keydown', mockObj);
            expect(props.addTodo).not.toBeCalled();
        })
        
        it('执行完addTodo的时候，值会为空', () => {
            const { wrapper, props } = setup();
            const mockObj = {
                keyCode: 13,
                target: {
                    value: 'sds'
                }
            };
            wrapper.find('input').simulate('keydown', mockObj);
            expect(wrapper.find('input').text()).toBe('');
        })
    })
})

