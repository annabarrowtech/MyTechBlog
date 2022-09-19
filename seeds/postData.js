const { Post } = require('../models');

const postdata = 
[
    {
        "postTitle": "We are going to talk about Web3.0 today!",
        "postContent": "The third wave of the internet is here!",
        "userId": 1
    },
    {
        "postTitle": "Getting a coding job in the current market",
        "postContent": "Coding jobs are in need of experienced employees",
        "userId": 2
    },
    {
        "postTitle": "Vanderbilt Coding Bootcamp",
        "postContent": "24 weeks to learn fullstack development skills",
        "userId": 3
    }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;