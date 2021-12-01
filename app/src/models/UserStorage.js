'use strict';

const db = require('../config/db');

class UserStorage {
    static getUserInfo(id){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                console.log(id);
                return err?reject(`${err}`):resolve(data[0]);
            });
        });
    }

    static duplicateCheck(id){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                console.log(data[0]);
                return err?reject(err):resolve(data[0] === undefined ?{ success:false, msg:"중복되지 않은 아이디입니다." }:{ success:false, msg:"중복되는 아이디입니다." });
            });
        });
    }

    static save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, nm, pw) VALUES(?, ?, ?)"
            db.query(
                query, 
                [userInfo.id,userInfo.name,userInfo.pw], 
                (err) => {
                    return err?reject(`${err}`):resolve({ success: true });
            });
        });
    }
}

module.exports = UserStorage;