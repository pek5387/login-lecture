'use strict';

const User = require('../../models/User');
const UserStorage = require('../../models/UserStorage')

const output = {
        index: (req, res) => {
            res.render('home/index');
        },
        login: (req, res) => {
            res.render('home/login');
        },
        join: (req, res) => {
            res.render('home/join');
        },
}

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    join: async (req, res) => {
        const user = new User(req.body);
        const response = await user.join();
        return res.json(response);
    },
}


module.exports = {
    output,
    process,
};


