const registerValidator = require('../validator/registerValidator')
const bcrypt = require('bcrypt');
const User = require('../model/User');
module.exports = {
    register(req, res) {
        let { name, email, password, confirmPassword } = req.body
        let validate = registerValidator({ name, email, password, confirmPassword })
        
        if(!validate.isValid) {
            res.status(400).json(validate.error)
        } else {
            User.findOne({ email })
                .then(user => {
                    if(user => {
                        return res.status(400).json({
                            message: 'Email already exists'
                        })
                    })
                    
                    bcrypt.hash(password, 11, (err, hash) => {
                        if(err) {
                            return res.status(500).json({
                                message: 'Server Error Occured'
                            })
                        }
                        let user = new User({
                            name,
                            email,
                            password: hash,
                        })
                        console.log(user);
                        user.save()
                        then(user => {
                                res.status(201).json({
                                    message: 'User Created Successfully',
                                    user
                                })
                            })
                            .catch(error => serverError(res, error))
                    })
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).json({
                        message: 'Server Error Occured'
                    })
                })
        }
    }
}