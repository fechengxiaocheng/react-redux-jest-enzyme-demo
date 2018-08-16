/*
 * @Author: fechengxiaocheng 
 * @Date: 2018-08-14 15:26:43 
 * @Description: 'todo的item组建' 
 * @Last Modified by: za-xielingjuan
 * @Last Modified time: 2018-08-15 16:44:50
 * @ToDo: '' 
 */

import React from 'react';
import ReactDOM from 'react-dom';

class ToDoItem extends React.Component {
    render() {
        const { deleteTodo, todo, id } = this.props;
        return (
            <li onClick={() => deleteTodo(id)}>{todo}</li>
        )
    }
}

export default ToDoItem;