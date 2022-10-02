import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import testApi from '~/api/apiFiles/testApi';

const initialState = {
    tests: [],
    status: 'idle',
    error: null,
};

export const fetchTests = createAsyncThunk('tests/fetchTests', async () => {
    const response = await testApi.getAllTestsApi();
    return response.data;
});

export const createTest = createAsyncThunk('tests/createTest', async (data) => {
    const { title } = data;
    const response = await testApi.createTestApi({ title });
    return { id: response.data, title, isPublish: false, questions: null };
});

export const updateTest = createAsyncThunk('tests/updateTest', async (data) => {
    const { id, title } = data;
    const response = await testApi.updateTestApi(id, { title });
    return { id: response.data, title };
});

export const publishedTest = createAsyncThunk('tests/publishedTest', async (data) => {
    const { id, isPublish } = data;
    const response = await testApi.publicAndNotPublicTestApi(id, { isPublish });
    return { id: response.data, isPublish };
});

export const deleteTest = createAsyncThunk('tests/deleteTest', async (data) => {
    const { id } = data;
    const response = await testApi.deleteTestApi(id);
    return { id: response.data };
});

export const addQuestionToTest = createAsyncThunk('tests/addQuestionToTest', async (data) => {
    const { testId, questionText, timeLimit, point, questionType } = data;
    const response = await testApi.addQuestionToTestApi(testId, { questionText, timeLimit, point, questionType });
    return { testId, questionId: response.data, questionText, timeLimit, point, questionType };
});

export const updateQuestionInTest = createAsyncThunk('tests/updateQuestionInTest', async (data) => {
    const { testId, questionId, questionText, timeLimit, point, questionType } = data;
    const response = await testApi.updateQuestionInTestApi(testId, questionId, {
        questionText,
        timeLimit,
        point,
        questionType,
    });
    return { testId, questionId: response.data, questionText, timeLimit, point, questionType };
});

export const removeQuestionFromTest = createAsyncThunk('tests/removeQuestionFromTest', async (data) => {
    const { testId, questionId } = data;
    const response = await testApi.removeQuestionFromTestApi(testId, questionId);
    return { testId, questionId: response.data };
});

export const addChoiceToQuestionInTest = createAsyncThunk('tests/addChoiceToQuestionInTest', async (data) => {
    const { testId, questionId, choiceText, isCorrect } = data;
    const response = await testApi.addChoiceToQuestionInTestApi(testId, questionId, { choiceText, isCorrect });
    return { testId, questionId, choiceId: response.id, choiceText, isCorrect };
});

export const updateChoiceInQuestionInTest = createAsyncThunk('tests/updateChoiceInQuestionInTest', async (data) => {
    const { testId, questionId, choiceId, choiceText, isCorrect } = data;
    const response = await testApi.updateChoiceInQuestionInTest(testId, questionId, choiceId, {
        choiceText,
        isCorrect,
    });
    return { testId, questionId, choiceId: response.data, choiceText, isCorrect };
});

export const removeChoiceFromQuestionInTest = createAsyncThunk('tests/removeChoiceFromQuestionIntest', async (data) => {
    const { testId, questionId, choiceId } = data;
    const response = await testApi.removeChoiceFromQuestionInTest(testId, questionId, choiceId);
    return { testId, questionId, choiceId: response.data };
});

const testSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchTests.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchTests.fulfilled, (state, action) => {
                state.tests = state.tests.concat(action.payload);
                state.status = 'succeeded';
            })
            .addCase(fetchTests.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createTest.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(createTest.fulfilled, (state, action) => {
                const { id, title, isPublish, questions } = action.payload;
                state.tests.push({ id, title, isPublish, questions });
                state.status = 'succeeded';
            })
            .addCase(updateTest.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(updateTest.fulfilled, (state, action) => {
                const { id, title } = action.payload;
                const existingTest = state.tests.find((test) => test.id === id);
                if (existingTest) {
                    existingTest.title = title;
                }
                state.status = 'succeeded';
            })
            .addCase(publishedTest.fulfilled, (state, action) => {
                const { id, isPublish } = action.payload;
                const existingTest = state.tests.find((test) => test.id === id);
                if (existingTest) {
                    existingTest.isPublish = isPublish;
                }
                state.status = 'succeeded';
            })
            .addCase(deleteTest.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(deleteTest.fulfilled, (state, action) => {
                const { id } = action.payload;
                const newTests = state.tests.filter((test) => test.id !== id);
                state.tests = newTests;
                state.status = 'succeeded';
            })
            .addCase(addQuestionToTest.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addQuestionToTest.fulfilled, (state, action) => {
                const { testId, questionId, questionText, timeLimit, point, questionType } = action.payload;
                const existingTest = state.tests.find((test) => test.id === testId);
                if (existingTest) {
                    existingTest.questions.push({ id: questionId, questionText, timeLimit, point, questionType });
                }
                state.status = 'succeeded';
            })
            .addCase(updateQuestionInTest.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(updateQuestionInTest.fulfilled, (state, action) => {
                const { testId, questionId, questionText, timeLimit, point, questionType } = action.payload;
                const existingTest = state.tests.find((test) => test.id === testId);
                if (existingTest) {
                    const existingQuestion = existingTest.questions.find((question) => question.id === questionId);
                    if (existingQuestion) {
                        existingQuestion.questionText = questionText;
                        existingQuestion.timeLimit = timeLimit;
                        existingQuestion.point = point;
                        existingQuestion.questionType = questionType;
                    }
                }
                state.status = 'succeeded';
            })
            .addCase(removeQuestionFromTest.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(removeQuestionFromTest.fulfilled, (state, action) => {
                const { testId, questionId } = action.payload;
                const existingTest = state.tests.find((test) => test.id === testId);
                if (existingTest) {
                    const newQuestions = existingTest.questions.filter((question) => question.id !== questionId);
                    existingTest.questions = newQuestions;
                }
                state.status = 'succeeded';
            })
            .addCase(addChoiceToQuestionInTest.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addChoiceToQuestionInTest.fulfilled, (state, action) => {
                const { testId, questionId, choiceId, choiceText, isCorrect } = action.payload;
                const existingTest = state.tests.find((test) => test.id === testId);
                if (existingTest) {
                    const existingQuestion = existingTest.questions.find((question) => question.id === questionId);
                    if (existingQuestion) {
                        existingQuestion.choices.push({ id: choiceId, choiceText, isCorrect });
                    }
                }
                state.status = 'succeeded';
            })
            .addCase(updateChoiceInQuestionInTest.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(updateChoiceInQuestionInTest.fulfilled, (state, action) => {
                const { testId, questionId, choiceId, choiceText, isCorrect } = action.payload;
                const existingTest = state.tests.find((test) => test.id === testId);
                if (existingTest) {
                    const existingQuestion = existingTest.questions.find((question) => question.id === questionId);
                    if (existingQuestion) {
                        const existingChoice = existingQuestion.choices.find((choice) => choice.id === choiceId);
                        if (existingChoice) {
                            existingChoice.choiceText = choiceText;
                            existingChoice.isCorrect = isCorrect;
                        }
                    }
                }
                state.status = 'succeeded';
            })
            .addCase(removeChoiceFromQuestionInTest.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(removeChoiceFromQuestionInTest.fulfilled, (state, action) => {
                const { testId, questionId, choiceId } = action.payload;
                const existingTest = state.tests.find((test) => test.id === testId);
                if (existingTest) {
                    const existingQuestion = existingTest.questions.find((question) => question.id === questionId);
                    if (existingQuestion) {
                        const newChoices = existingQuestion.choices.filter((choice) => choice.id !== choiceId);
                        existingQuestion.choices = newChoices;
                    }
                }
                state.status = 'succeeded';
            });
    },
});

export default testSlice.reducer;

export const selectAllTests = (state) => state.tests;
export const selectTestById = (state, testId) => state.tests.find((test) => test.id === testId);
