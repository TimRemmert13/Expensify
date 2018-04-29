import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
<<<<<<< HEAD
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
=======
>>>>>>> a2ab87e2b90195a869bcd9153e891e9d0b10bf0a
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
<<<<<<< HEAD
            expenses: expensesReducer,
            filters: filtersReducer,
=======
>>>>>>> a2ab87e2b90195a869bcd9153e891e9d0b10bf0a
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};


