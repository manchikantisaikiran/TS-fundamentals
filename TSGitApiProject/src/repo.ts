export default class Repo {
    name: string;
    description: string;
    url: string;
    size: number;

    constructor(repo: any) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.url;
        this.size = repo.size;

    }
}