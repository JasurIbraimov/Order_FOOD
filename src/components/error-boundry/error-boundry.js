import React, {Component} from 'react';
import Error from '../error';

// Создаем ErrorBoundry - это обертка для ловли ошибок c методом жизненного цикла componentDidCatch

export default class ErrorBoundry extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true});
    }
    render() {
        if (this.state.error) {
            return <Error/>
        }
        return this.props.children;
    }
}