export default class Service {
    async getData(url) {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Couldn't fetch ${url}. Status: ${response.status} - ${response.statusText}`);
        }

        return await response.json();
    }

    async postData(url, body) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`Couldn't post ${url}. Status: ${response.status} - ${response.statusText}`)
        }

        return await response.json();
    }

    async getAllPosts() {
        return await this.getData('/api/posts');
    }

    async getPostById(id) {
        return await this.getData(`/api/posts/${id}`);
    }

    async createPost(body) {
        return await this.postData('/api/posts/add', body);
    }
}