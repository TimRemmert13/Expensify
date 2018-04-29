import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
<<<<<<< HEAD
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.jsx';
import AddExpensePage from '../components/AddExpensePage.jsx';
import EditExpensePage from '../components/EditExpensePage.jsx';
=======
import DashboardPage from '../components/DashboardPage.jsx';
>>>>>>> a2ab87e2b90195a869bcd9153e891e9d0b10bf0a
import NotFoundPage from '../components/NotFoundPage.jsx';
import Login from '../components/Login.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import PublicRoute from './PublicRoute.jsx';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true} />
<<<<<<< HEAD
                <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
=======
                <PrivateRoute path='/dashboard' component={DashboardPage} />
>>>>>>> a2ab87e2b90195a869bcd9153e891e9d0b10bf0a
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;