const router = require('express').Router()
const User = require('../models/user.model')

// router.route('/login').get((req, res) => {

// })

router.route('/').get((req, res) => {
    user.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({
        username: username,
        cart: Array
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;