import * as request from 'request'
import User from './user';
import Repo from './repo'

const options: any = { headers: { 'User-Agent': "abc" } }

export default class GitApiService {
    getUserInfo(userName: string, cb: (user: User) => any) {

        request.get(`https://api.github.com/users/${userName}`,
            options,
            (err, res: any, body) => {
                const user = new User(JSON.parse(body))
                cb(user)

            })
    }
    getRepos(userName: string, cb: (repo: Repo[]) => any) {
        request.get(`https://api.github.com/users/${userName}/repos`,
            options,
            (err, res: any, body) => {
                const parsedBody = JSON.parse(body)
                const repoArray = parsedBody.map((repo: any) => new Repo(repo))
                cb(repoArray)
            })
    }
}