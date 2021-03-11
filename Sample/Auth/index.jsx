import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Signin from './SignIn/Signin';
import Signup from './Signup';
import './Auth.scss';

const Auth = ({ handleFormOpen }) => {
    const [signInView, setSignInView] = useState(true);
    const [closeForm, setCloseForm] = useState(false);

    const handleView = (val) => {
        setSignInView(val);
    };

    const handleClose = (val) => {
        setCloseForm(val);
        handleFormOpen(!val);
    };

    return (
        <div className="auth-container" style={{ display: `${closeForm ? 'none' : 'flex'}` }}>
            {signInView ? <Signin handleView={handleView} handleClose={handleClose} /> : <Signup handleView={handleView} handleClose={handleClose} />}
        </div>
    );
};

Auth.propTypes = {
    handleFormOpen: PropTypes.func,
};

export default Auth;
