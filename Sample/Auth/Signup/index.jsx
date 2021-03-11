import React from 'react';
import Signup from './Signup.jsx';
import PropTypes from 'prop-types';

const SignupContainer = ({ handleView, handleClose }) => {
    const openSignIn = (val) => {
        handleView(val);
    };

    const closeForm = (val) => {
        handleClose(val);
    };
    return <Signup handleView={openSignIn} handleClose={closeForm} />;
};

SignupContainer.propTypes = {
    handleView: PropTypes.func,
    handleClose: PropTypes.func,
};

export default SignupContainer;
