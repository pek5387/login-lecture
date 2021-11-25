'use strict';

class UserStorage {
    static #users = {
        id: ["pek5387","test","admin"],
        pw: ["gkdlqk11","test","admin"],
        name: ["박은규","테스터","운영자"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            
            return newUsers;
        }, {});

        return newUsers;
    }

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
}

module.exports = UserStorage;