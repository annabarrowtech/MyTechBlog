const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// All Posts Dashboard

router.get('/', withAuth, async (req, res) => {
    try {
        //store the results of the db query in a variable called postData. Should use "finds all" from the Post model.
        
        const postData = await Post.findAll({
            where:{"userId": req.session.userId},
            include: [User]
        });
        // Cleans the data we retrieved from the db
        const posts = postData.map((post) => post.get({ plain: true }));
console.log(posts);
        // fill in the view to be rendered
        res.render('all-posts', {
            //this how we specify a different layout other than main
            layout: 'dashboard',
            posts,
        });
    } catch (err) {
        res.redirect('login');
    }
});

// After click on new post button

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        // Rendering with a different layout than main
        layout: 'dashboard',
    });
});

// When we click on a post

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        // Retrieve data passed via the request body
        const postData = await Post.findByPk(req.params.id);

        if (postData) {
            // serializing the data
            const post = postData.get({ plain: true });
            console.log('post');
            
            res.render('edit-post', {
                layout: 'dashboard',
                post,
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;