const User = require('../models').User;

module.exports = {
    create(req, res) {
        return User
            .create({
                userName: req.body.userName,
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },

    findByUserName(req, res) {
       return User.findOne({ where: { userName: req.body.userName }})
       .then(user => res.status(201).send(user))
       .catch(error => res.status(400).send(error))
    },
};
