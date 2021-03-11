import React from 'react';
import PropTypes from 'prop-types';
import './SocialAuth.scss';

const SocialAuth = ({ myClass }) => {
    return (
        <div className="row">
            <div className={myClass}>
                <div className="social-sign-up-button">
                    <button className="button">
                        <i className="fab fa-facebook-f"></i> Sign up with Facebook
                    </button>
                </div>
            </div>
            <div className={myClass}>
                <div className="social-sign-up-button">
                    <button className="button">
                        <i className="fab fa-google"></i> Sign up with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

SocialAuth.propTypes = {
    myClass: PropTypes.string,
};

export default SocialAuth;
