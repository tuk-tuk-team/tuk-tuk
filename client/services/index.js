export default class Service {
    async getData(url) {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Couldn't fetch ${url}. Status: ${response.status} - ${response.statusText}`);
        }

        return await response.json();
    }

    async getAllPosts() {
        return await this.getData('/posts');
    }

    async getPostById(id) {
        return await this.getData(`/posts/${id}`);
    }
}