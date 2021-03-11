import React, { useState } from 'react';
import { formData } from './MockData/MockData';
import { func } from 'prop-types';
import { isEmailValid, isZipValid, isValidPhone } from './utils/utils';
import InputField from '../../InputField/InputField';
import AuthAction from '../../../../stores/auth/authAction';
import { connect } from 'react-redux';

const Form = ({ logInModalHandler, dispatch }) => {
    const [userData, setUserData] = useState(formData);
    const [logInModal, setLogInModal] = useState(false);

    const inputHandler = (e) => {
        const updatedData = userData?.map((item) => {
            if (item?.name === e.target?.name) {
                return { ...item, value: e.target?.value, error: false, helper: '' };
            } else {
                return { ...item };
            }
        });
        setUserData(updatedData);
    };

    const isValid = (e) => {
        let res = true;
        const updatedData = userData?.map((item) => {
            if (item?.value === '') {
                console.log(item.value, item?.name, 'value');
                res = false;
                return { ...item, error: true, helper: `${item?.title} is required!` };
            } else {
                if (item?.name === 'email') {
                    return isEmailValid(item?.value) ? { ...item } : { ...item, error: true, helper: `${item?.title} is invalid!` };
                }
                if (item?.name === 'zip') {
                    return isZipValid(item?.value) ? { ...item } : { ...item, error: true, helper: `${item?.title} can only be 5 digit long!` };
                }
                if (item?.name === 'home_phone') {
                    return isValidPhone(item?.value)
                        ? { ...item }
                        : { ...item, error: true, helper: `${item?.title} is invalid! can only be 10 digit long!` };
                }
                if (item?.name === 'mobile_phone') {
                    return isValidPhone(item?.value)
                        ? { ...item }
                        : { ...item, error: true, helper: `${item?.title} is invalid! can only be 10 digit long!` };
                }
                return { ...item };
            }
        });
        setUserData(updatedData);
        return res;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(isValid(e));
        // check validation on form inputz`
        if (!isValid(e)) {
            return;
        } else {
            const data = userData?.reduce((a, c) => ({ ...a, [c.name]: c.value }), {});
            console.log(data, 'valid');
            dispatch(AuthAction.registerUser(data));
        }
    };
    React.useEffect(() => {
        logInModalHandler(logInModal);
    }, [logInModal]);

    const handleLogin = () => {
        const val = logInModal ? false : true;
        setLogInModal(val);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-container">
                <div className="row">
                    {(userData || []).map((item) => (
                        <div className="col-sm-6 col-xs-12" key={item?.id}>
                            <div className="form-group">
                                <label htmlFor={item?.id}>{item?.title}</label>
                                <InputField inputData={item} inputHandler={inputHandler} />
                            </div>
                        </div>
                    ))}
                    <div className="col-sm-12 col-xs-12 signup-button-container">
                        <button className="signup-button" type="submit">
                            Sign up
                        </button>
                        <p>
                            Already have an account?
                            <span>
                                <button onClick={handleLogin}>Log in</button>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
};

Form.propTypes = {
    logInModalHandler: func.isRequired,
    dispatch: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});

export default connect(null, mapDispatchToProps)(Form);
