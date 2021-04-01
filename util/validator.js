const validEmail = (email) => {

    if(email.trim() === '') {
        return false;
    }else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

        if(!email.match(regEx)) {
            return false;
        }
    }

    return true;
};

module.exports.validateRegisterInput = (
    email,
    username,
    password,
    confirmPassword
) => {

    const errors = {};

    if(username.trim() === '') {
        errors.username = 'confirm Username';
    }

    if(validEmail(email)) {
        errors.email = 'confirm Email';
    }

    if(password.trim() === '' || confirmPassword === '') {
        errors.password = 'confirm Password';
    }else if(password !== confirmPassword) {
        errors.confirmPassword = 'password not match';
    }

    return {
        errors,
        valid: Object.keys(error).length < 1
    }
};

module.exports.validateLoginInput = (
    email,
    password
) => {

    const errors = {};

    if(validEmail(email)) {
        errors.email = 'confirm Email';
    }

    if(password.trim() === '') {
        errors.password = 'confirm Password';
    }

    return {
        error,
        valid: Object.keys(erorrs).length < 1
    }
};

