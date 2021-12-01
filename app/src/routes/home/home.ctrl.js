
const logger = require('../../config/logger');
const User = require('../../models/User');

const output = {
    index: (req, res) => {
        logger.info(`GET / 200 "메인페이지 이동"`);
        res.render('home/index');
    },
    login: (req, res) => {
        logger.info(`GET /login 200 "로그인페이지 이동"`);
        res.render('home/login');
    },
    join: (req, res) => {
        logger.info(`GET /join 200 "회원가입페이지 이동"`);
        res.render('home/join');
    },
}

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if(response.err) logger.error(`POST /login 200 Login Response: "success: ${response.success}, msg: ${response.err}"`);
        else logger.info(`POST /login 200 Login Response: "success: ${response.success}, msg: ${response.msg}"`);
        return res.json(response);
    },
    join: async (req, res) => {
        const user = new User(req.body);
        const response = await user.join();
        if(response.err) logger.error(`POST /login 200 Join Response: "success: ${response.success}, msg: ${response.err}"`);
        else logger.info(`POST /join 200 Join Response: "success: ${response.success}, msg: ${response.msg}"`);
        return res.json(response);
    },
    duplicateCheck: async (req, res) => {
        const user = new User(req.body);
        const response = await user.duplicateCheck();
        if(response.err) logger.error(`POST /login 200 DuplicateCheck Response: "success: ${response.success}, msg: ${response.err}"`);
        else logger.info(`POST /join 200 DuplicateCheck Response: "success: ${response.success}, msg: ${response.msg}"`);
        return res.json(response);
    },
}


module.exports = {
    output,
    process,
};


