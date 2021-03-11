import React, { useState } from 'react';
import { func } from 'prop-types';
import { v4 as uuid } from 'uuid';
import { isEmailValid } from '../utils/utlils.js';
import SignInForm from './SignInForm';
import SocialAuth from '../SocialAuth/SocialAuth';
import AuthAction from '../../../../stores/auth/authAction';
import { connect } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import './Signin.scss';

const emailData = {
    id: uuid(),
    type: 'text',
    name: 'email',
    value: '',
    error: false,
    helper: '',
    placeholder: 'Enter email',
    title: 'Email',
};

const passwordData = {
    id: uuid(),
    type: 'password',
    name: 'password',
    value: '',
    error: false,
    helper: '',
    placeholder: 'Enter password',
    title: 'Password',
};

const SignInContainer = ({ dispatch, handleView, handleClose }) => {
    const props = useSpring({
        transform: 'scale(1)',
        from: { transform: 'scale(0)' },
    });
    const [email, setEmail] = useState(emailData);
    const [password, setPassword] = useState(passwordData);
    const [loading, setLoading] = useState(false);

    const openSignUp = (val) => {
        handleView(val);
    };

    //handle user input for email and password
    const inputHandler = (e) => {
        if (e.target.name === emailData?.name) {
            setEmail({ ...email, value: e.target.value, error: e.target.value ? false : true, helper: '' });
        }
        if (e.target.name === passwordData?.name) {
            setPassword({ ...password, value: e.target.value, error: e.target.value ? false : true, helper: '' });
        }
    };

    //check isvalid credentials emal and password
    const isValid = () => {
        let res = true;
        if (email?.value === '') {
            res = false;
            setEmail({ ...email, error: true, helper: 'Enter email!' });
        } else {
            if (!isEmailValid(email?.value)) {
                setEmail({ ...email, error: true, helper: 'Enter Valid Email includes [@, .xyg]' });
            }
        }
        if (password?.value === '') {
            res = false;
            setPassword({ ...password, error: true, helper: 'Enter password!' });
        }
        return res;
    };

    //login user handler
    const submitHandler = (e) => {
        setLoading(true);
        e.preventDefault();
        const obj = {
            email: email?.value,
            password: password?.value,
        };

        //if credentials are valid then dispatch action for login user
        const isValidUser = isValid();
        if (isValidUser) {
            dispatch(AuthAction.loginUser(obj));
            setLoading(false);
        }
    };
    return (
        <animated.div style={props} className="signin-wrapper">
            <div className="sign-in-card-banner">
                <div className="sign-in-card-container">
                    <h1 className="join-our-open-market-sign-in">
                        Join our open market place to learn and instruct anything for the mind, body and soul
                    </h1>
                    <div className="sign-in-close-icon">
                        <i className="fas fa-times" onClick={() => handleClose(true)}></i>
                    </div>
                </div>
            </div>
            <div className="signin-form-cont">
                <SocialAuth myClass="col-sm-12" />
                <SignInForm
                    handleView={openSignUp}
                    submitHandler={submitHandler}
                    inputHandler={inputHandler}
                    email={email}
                    password={password}
                    loading={loading}
                />
            </div>
        </animated.div>
    );
};

SignInContainer.propTypes = {
    handleView: func.isRequired,
    handleClose: func.isRequired,
    dispatch: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});
export default connect(null, mapDispatchToProps)(SignInContainer);
