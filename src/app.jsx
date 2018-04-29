import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter.jsx';
import configureStore from'./store/configureStore';
<<<<<<< HEAD
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
=======
import {login, logout} from './actions/auth';
>>>>>>> a2ab87e2b90195a869bcd9153e891e9d0b10bf0a
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage.jsx';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
<<<<<<< HEAD
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
=======
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
>>>>>>> a2ab87e2b90195a869bcd9153e891e9d0b10bf0a
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});




