"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
class User {
    constructor(userRes) {
        this.login = userRes.login;
        this.fullName = userRes.name;
        this.repoCount = userRes.public_repos;
        this.followerCount = userRes.followers;
        this.repos = [];
    }
}
exports.default = User;
console.log('user');
exports.a = "kiran";
