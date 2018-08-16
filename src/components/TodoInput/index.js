/*
 * @Author: fechengxiaocheng
 * @Date: 2018-08-14 15:27:08
 * @Description: 'todo的input组建'
 * @Last Modified by: za-xielingjuan
 * @Last Modified time: 2018-08-16 17:53:11
 * @ToDo: '输入框有值的时候，keydown的时候add 一个todo'
 */

import React from 'react';
import ReactDOM from 'react-dom';

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        this.handlekeyDown = this.handlekeyDown.bind(this);
    }
    handlekeyDown(e) {
        const value = e.target.value;
        if (e.keyCode === 13 && value) {
            // 监听enter事件
            this.props.addTodo(value);
            e.target.value = '';
        }
    }
    render() {
        return (
            <input placeholder="please input" onKeyDown={this.handlekeyDown}/>
        )
    }
}

export default ToDoInput;
