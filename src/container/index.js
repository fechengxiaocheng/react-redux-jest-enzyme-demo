import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';
import * as todoActions from '../actions';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(text) {
        const { actions } = this.props;
        actions.addTodo(text);
    }
    deleteTodo(text) {
        const { actions } = this.props;
        actions.deleteTodo(text);
    }

    render() {
        const { todos } = this.props;
        return (
            <div>
                <TodoInput addTodo={this.addTodo} />
                <ul>
                    {
                        todos.map((todo, index) => {
                            return <TodoItem key={index} todo={todo} id={index} deleteTodo={this.deleteTodo} />;
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(todoActions, dispatch)
});

App.propTypes = {
    todos: PropTypes.array,
    actions: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
