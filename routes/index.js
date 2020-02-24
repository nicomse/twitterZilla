const userController = require('../controllers').user;
const tweetController = require('../controllers').tweet;

module.exports = (app) => {
    app.get('/api', (req,res) => res.status(200).send({
        message: 'Welcome to the root api controller'
    }));
    //create a user
    app.post('/api/user', userController.create);
    //get a user by id
    app.get('/api/user', userController.findByUserName);
    //create a tweet
    app.post('/api/tweet', tweetController.createTweet)
    //create a tweet
    app.get('/api/tweet', tweetController.getTweetById)
}
