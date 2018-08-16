/*
 * @Author: fechengxiaocheng
 * @Date: 2018-08-14 15:26:43
 * @Description: 'todo的item组建'
 * @Last Modified by: za-xielingjuan
 * @Last Modified time: 2018-08-16 18:11:57
 * @ToDo: ''
 */

import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    render() {
        const { deleteTodo, todo, id } = this.props;
        return (
            <li onClick={() => deleteTodo(id)}>{todo}</li>
        );
    }
}

TodoItem.propTypes = {
    deleteTodo: PropTypes.func,
    todo: PropTypes.string,
    id: PropTypes.number
};

export default TodoItem;
