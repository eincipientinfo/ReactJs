import React from 'react';
import './Signup.scss';
import Form from './Form';
import { useSpring, animated } from 'react-spring';
import SocialAuth from '../SocialAuth/SocialAuth';

import { func, arrayOf, string } from 'prop-types';

const Signup = ({ handleView, handleClose }) => {
    const props = useSpring({
        transform: 'scale(1)',
        from: { transform: 'scale(0)' },
    });
    const setLoginModal = (val) => {
        handleView(val);
    };
    return (
        <animated.div style={props} className="signup-wrapper">
            <div className="card-banner">
                <div className="card-container">
                    <h1 className="join-our-open-market">Join our open market place to learn and instruct anything for the mind, body and soul</h1>
                    <div className="close-icon" onClick={() => handleClose(true)}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
            <div className="signup-form-cont ">
                <SocialAuth myClass="col-sm-6" />
                <Form logInModalHandler={setLoginModal} />
            </div>
        </animated.div>
    );
};

Signup.propTypes = {
    formData: arrayOf({
        shape: {
            type: string.isRequired,
            title: string.isRequired,
            name: string.isRequired,
            value: string.isRequired,
            placeholder: string.isRequired,
        },
    }),
    handleView: func,
    handleClose: func,
};
export default Signup;
