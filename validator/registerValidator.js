const express = require('express')
const validator = require('validator')
const validate = user => {
    let error = {}

    if(!user.name) {
        error.name = ' Please provide your name '
    }
    if(!user.email) {
        error.email = 'Please provide your email'
    } else if (!validator.isEmail(user.email)) {
        error.email = 'Please provide valid email'
    }

    if(!user.password) {
        error.password = 'Please provide a password'
    } else if(user.password.length < 6) {
        error.password = 'Passsword must be a greater than or Equal 6 Character'
    }

    if(!user.confirmPassword) {
        error.confirmPassword = 'Please provide confirmation password'
    } else if(user.password !== user.confirmPassword) {
        error.confirmPassword = 'Password doesn\'t match'
    }
    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}
module.exports = validate