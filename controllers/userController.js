module.exports = {
    register(req, res) {
        let name = req.body.name
        let email = req.body.email
        res.json({
            message: ` Hello ${name} and ${email} `
        })
    }
}