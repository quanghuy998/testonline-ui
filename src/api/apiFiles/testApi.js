import axiosClient from '../axiosClient';

const testApi = {
    getTests() {
        const url = '/tests';
        return axiosClient.get(url);
    },

    getTestById(id) {
        const url = `/tests/${id}`;
        return axiosClient.get(url);
    },

    createTest(data) {
        const url = '/tests';
        return axiosClient.post(url, data);
    },

    updateTest(id, data) {
        const url = `/tests/${id}`;
        return axiosClient.put(url, data);
    },

    deleteTest(id) {
        const url = `/tests/${id}`;
        return axiosClient.delete(url);
    },
};

export default testApi;
