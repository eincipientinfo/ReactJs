import React from 'react';
import { func, shape, string, bool } from 'prop-types';
import InputField from '../../InputField/InputField';
import './Signin.scss';

const SignInForm = ({ handleView, inputHandler, submitHandler, email, password, loading }) => {
    return (
        <form onSubmit={submitHandler}>
            <div className="form-container">
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="email">{email?.title}</label>
                        <InputField inputData={email} inputHandler={inputHandler} />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="password">{password?.title}</label>
                        <InputField inputData={password} inputHandler={inputHandler} />
                    </div>
                </div>
                <div className="signin-button-container">
                    <button className="signin-button" type="submit">
                        {loading && <div className="spinner-border spinner" role="status"></div>}
                        {loading ? 'Procesing...' : 'Sign In'}
                    </button>
                    <p>
                        Don&apos;t have an account?
                        <span>
                            <button onClick={() => handleView(false)}>Sign Up</button>
                        </span>
                    </p>
                </div>
            </div>
        </form>
    );
};

SignInForm.propTypes = {
    handleView: func.isRequired,
    submitHandler: func.isRequired,
    inputHandler: func.isRequired,
    loading: bool.isRequired,
    email: shape({
        name: string.isRequired,
        value: string.isRequired,
    }),
    password: shape({
        name: string.isRequired,
        value: string.isRequired,
    }),
};

export default SignInForm;
