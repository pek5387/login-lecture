
const UserStorage = require('./UserStorage')

class User {
    constructor(body) {
        this.body = body;
    }
    
    async login(){
        const client = this.body;
        try {
            const { id, pw } = await UserStorage.getUserInfo(client.id);
            if(id){
                return id === client.id && pw === client.pw?
                { success: true }:
                { success: false, msg: '비밀번호가 틀렸습니다'};
            }
            return { success: false, msg: '존재하지 않는 아이디입니다.'};
        } catch(err) {
            return { success: false, err }
        }
    }

    async duplicateCheck(){
        const client = this.body;
        try {
            const response = await UserStorage.duplicateCheck(client.id);
            return response;
        } catch(err) {
            return {success: true, err};
        }
    }

    async join(){
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success:false, err };
        }
    }
}

module.exports = User;