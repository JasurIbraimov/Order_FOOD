import { createStore } from 'redux';
import reducer from './reducers';

// Создаем store 
const store = createStore(reducer);

export default store;