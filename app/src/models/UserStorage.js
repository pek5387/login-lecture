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
        },{});
        return newUsers;
    }
}

module.exports = UserStorage;