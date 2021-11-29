'use strict';

class UserStorage {
    static #users = {
        id: ["rlfehd","test","admin"],
        pw: ["rlfehd","test","admin"],
        name: ["rlfehd","테스터","운영자"],
    };

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userkeys = Object.keys(users)
        const userInfo = userkeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.pw.push(userInfo.pw);
        users.name.push(userInfo.name);
    }
}

module.exports = UserStorage;