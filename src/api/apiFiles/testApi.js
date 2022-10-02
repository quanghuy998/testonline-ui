import axiosClient from '../axiosClient';

const testApi = {
    getAllTestsApi() {
        const url = '/tests';
        return axiosClient.get(url);
    },

    getTestApi(id) {
        const url = `/tests/${id}`;
        return axiosClient.get(url);
    },

    createTestApi(data) {
        const url = '/tests';
        return axiosClient.post(url, data);
    },

    updateTestApi(id, data) {
        const url = `/tests/${id}`;
        return axiosClient.put(url, data);
    },

    publicAndNotPublicTestApi(id, data) {
        const url = `/tests/${id}/publicize`;
        return axiosClient.put(url, data);
    },

    deleteTestApi(id) {
        const url = `/tests/${id}`;
        return axiosClient.delete(url);
    },

    addQuestionToTestApi(id, data) {
        const url = `/tests/${id}/questions`;
        return axiosClient.post(url, data);
    },

    updateQuestionInTestApi(testId, questionId, data) {
        const url = `/tests/${testId}/questions/${questionId}`;
        return axiosClient.put(url, data);
    },

    removeQuestionFromTestApi(testId, questionId) {
        const url = `tests/${testId}/questions/${questionId}`;
        return axiosClient.delete(url);
    },

    addChoiceToQuestionInTestApi(testId, questionId, data) {
        const url = `tests/${testId}/questions/${questionId}`;
        return axiosClient.post(url, data);
    },

    updateChoiceInQuestionInTest(testId, questionId, choiceId, data) {
        const url = `tests/${testId}/questions/${questionId}/choices/${choiceId}`;
        return axiosClient.put(url, data);
    },

    removeChoiceFromQuestionInTest(testId, questionId, choiceId) {
        const url = `tests/${testId}/questions/${questionId}/choices/${choiceId}`;
        return axiosClient.delete(url);
    },
};

export default testApi;
