import { Button, Input, InputAdornment, Pagination, Paper } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import QuestionForm from '~/pages/Questions/components/QuestionForm';
import TestDetailsPaper from './components/TestDetailsPaper';
import QuestionTable from './components/QuestionTable';
import './questions.scss';

const test = {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et nisi voluptates cumque hic odio nesciunt, itaque fugiat reprehenderit quaerat! Commodi reprehenderit esse, sit ut voluptate laboriosam earum delectus enim.',
    status: 'Publish',
    author: 'Huynh Duc Quang Huy',
    modifiedDate: '2022-11-10',
};

function Questions() {
    const [openForm, setOpenForm] = useState(false);

    const handleOpenForm = () => setOpenForm(!openForm);

    const toolElement = (
        <div className="page__tool">
            <div className="page__tool--left">
                <Input
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
                <Button variant="outlined">Filter</Button>
            </div>
            <div className="page__tool--right">
                <Button variant="outlined" color="success" onClick={handleOpenForm}>
                    Create
                </Button>
                <Button variant="outlined" color="error">
                    Delete
                </Button>
            </div>
        </div>
    );

    return (
        <main className="content">
            {openForm && <QuestionForm onClick={handleOpenForm}></QuestionForm>}
            <h2 className="content__header">Question</h2>
            <TestDetailsPaper test={test}></TestDetailsPaper>
            <Paper className='container content__container'>
                <h4>Question table</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolore. Suscipit labore tempore
                    aliquid impedit in! Laborum sint praesentium incidunt odit dolor amet temporibus fuga odio omnis
                    laboriosam! Distinctio, itaque!
                </p>
                {toolElement}
                <QuestionTable></QuestionTable>
                <Pagination className='pagination' count={5}></Pagination>
            </Paper>
        </main>
    );
}

export default Questions;
