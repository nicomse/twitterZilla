const Tweet = require('../models').Tweet;

module.exports = {
    createTweet(req, res) {
        console.log("aaa", req.body);
        return Tweet
            .create({
                tweet: req.body.tweet,
                userId: req.body.userId
            })
            .then(tweet => res.status(201).send(tweet))
            .catch(error => res.status(400).send(error));
    },
    getTweetById(req, res) {
        return Tweet.findOne({ where: { userName: req.body.userName }})
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error))
    },
};
