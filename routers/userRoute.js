const { register } = require('../controllers/userController')

const router = require('express').Router()

// registration route

router.post('/register', register)

module.exports = router