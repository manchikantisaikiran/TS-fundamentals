import Repo from './repo';
import Service from './service'
import * as _ from 'lodash'

const serviceObj = new Service();
if (process.argv.length < 3) {
    console.log('pass the username!');
} else {
    serviceObj.getUserInfo(process.argv[2], (user) => {
        serviceObj.getRepos(process.argv[2], (repos: Repo[]) => {
            let filterRepos = _.take(repos, 1)
            user.repos = filterRepos
            console.log(user);
        });
    });
}