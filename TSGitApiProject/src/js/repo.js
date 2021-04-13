"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repo {
    constructor(repo) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.url;
        this.size = repo.size;
    }
}
exports.default = Repo;
console.log('repo');
