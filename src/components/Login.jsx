import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const Login = ({startLogin}) => (
        <div className="box-layout">
            <div className="box-layout__box">
<<<<<<< HEAD
                <h1 className="box-layout__title">Expensify</h1>
                <p>Get your expenses under control today!</p> 
=======
                <h1 className="box-layout__title">react-boilerplate</h1>
                <p>Tag line here</p> 
>>>>>>> a2ab87e2b90195a869bcd9153e891e9d0b10bf0a
                <button onClick={startLogin} className="button">Login with Google</button>
            </div>
        </div>
    );

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});



export default connect(undefined, mapDispatchToProps)(Login);