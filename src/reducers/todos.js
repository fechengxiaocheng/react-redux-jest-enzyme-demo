import { ADD_TODO, DELETE_TODO } from '../constants';

const initialState = ['chengxiaocheng'];

export default function todos(state = initialState, action) {
    switch (action.type) {
    case ADD_TODO:
        return [
            action.text,
            ...state
        ];
    case DELETE_TODO:
        return state.filter((x, index) => index !== action.index);
    default:
        return state;
    }
}
