var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var phoneno = /^\d{10}$/;

export const isEmailValid = (str) => {
    const isValid = str.match(pattern);
    return isValid;
};

export const isZipValid = (zip) => {
    let res = true;
    if (zip.length > 5 || zip.length < 5) {
        res = false;
    }
    return res;
};
export const isValidPhone = (phone) => {
    const isValid = phone.match(phoneno);
    return isValid;
};
