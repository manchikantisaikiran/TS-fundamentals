"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __importStar(require("request"));
const user_1 = __importDefault(require("./user"));
const repo_1 = __importDefault(require("./repo"));
const options = { headers: { 'User-Agent': "abc" } };
class GitApiService {
    getUserInfo(userName, cb) {
        request.get(`https://api.github.com/users/${userName}`, options, (err, res, body) => {
            const user = new user_1.default(JSON.parse(body));
            cb(user);
        });
    }
    getRepos(userName, cb) {
        request.get(`https://api.github.com/users/${userName}/repos`, options, (err, res, body) => {
            const parsedBody = JSON.parse(body);
            const repoArray = parsedBody.map((repo) => new repo_1.default(repo));
            cb(repoArray);
        });
    }
}
exports.default = GitApiService;
console.log('service');
