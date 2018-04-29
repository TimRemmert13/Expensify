import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
<<<<<<< HEAD
                    <h1>Expensify</h1>
=======
                    <h1>react-boilerplate</h1>
>>>>>>> a2ab87e2b90195a869bcd9153e891e9d0b10bf0a
                 </Link>
                 <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);