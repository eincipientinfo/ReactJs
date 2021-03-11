var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const isEmailValid = (str) => {
    const isValid = str.match(pattern);
    return isValid;
};
