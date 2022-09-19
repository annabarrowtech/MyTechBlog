const { User } = require('../models');

const userdata =
[
    {
        "username": "Anna",
        "password": "password"
    },
    {
        "username": "Laney",
        "password": "password"
    },
    {
        "username": "Frank",
        "password": "password"
    },
];

const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;