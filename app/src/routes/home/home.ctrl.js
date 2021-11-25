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
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
}


module.exports = {
    output,
    process,
};


