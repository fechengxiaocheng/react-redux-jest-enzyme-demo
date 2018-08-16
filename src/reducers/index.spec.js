// 有初始化state，add时候的state，delete时候的state

import { ADD_TODO, DELETE_TODO } from '../constants';
import todos from './todos';

describe('reducers', () => {
    it('有初始化state', () => {
        expect(todos(undefined, {})).toEqual(['xlj']);
    });

    it('add时候的state是正确的', () => {
        expect(todos([], {type: ADD_TODO, text: 'sss'})).toEqual(['sss']);
    });

    it('delete时候的state是正确的', () => {
        expect(todos(['sss', 'yyy'], {type: DELETE_TODO, index: 1})).toEqual(['sss']);
    });
});
