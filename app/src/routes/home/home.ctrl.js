
'use strict';
const users = {
    id: ['pek5387',"test",'admin'],
    pw: ['gkdlqk11','test','admin'],
}

const output = {
    index: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    },
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw){
                return res.json({
                    success: true,
                })
            }
        }

        return res.json({
            success: false,
            msg:'로그인이 실패했습니다',
        })
    },
}


module.exports = {
    output,
    process,
};
