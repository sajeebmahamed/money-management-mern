const registerValidator = require('../validator/registerValidator')
module.exports = {
    register(req, res) {
        let { name, email, password, confirmPassword } = req.body
        let validate = registerValidator({ name, email, password, confirmPassword })
        
        if(!validate.isValid) {
            res.status(400).json(validate.error)
        } else {
            res.status(200).json({
                message: 'Everything is okay'
            })
        }
        
        res.json({
            message: ` Hello ${name} and ${email} `
        })
    }
}