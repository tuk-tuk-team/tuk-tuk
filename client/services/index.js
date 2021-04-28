const getData = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Couldn't fetch ${url}. Status: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
}

const postData = async (url, body) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error(`Couldn't post ${url}. Status: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
}

const editData = async (url, body) => {
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error(`Couldn't edit ${url}. Status: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
}

const deleteData = async (url) => {
    const response = await fetch(url, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error(`Couldn't delete ${url}. Status: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
}

export default class Service {
    async getAllPosts() {
        return await getData('/api/posts');
    }

    async getPostById(id) {
        return await getData(`/api/posts/${id}`);
    }

    async createPost(body) {
        return await postData('/api/posts/add', body);
    }

    async editPost(id, body) {
        return await editData(`/api/posts/${id}/edit`, body);
    }
}