import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';
import Pagination from '~/components/Pagination';
import Button from '~/components/Button';
import Paper from '~/components/Paper';
import QuestionForm from '~/pages/Questions/components/QuestionForm';
import { useState } from 'react';

import './questions.scss';
import TestDetailsPaper from './components/TestDetailsPaper';
import QuestionTable from './components/QuestionTable';

const test = {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et nisi voluptates cumque hic odio nesciunt, itaque fugiat reprehenderit quaerat! Commodi reprehenderit esse, sit ut voluptate laboriosam earum delectus enim.',
    status: 'Publish',
    author: 'Huynh Duc Quang Huy',
    modifiedDate: '2022-11-10',
};

function Questions() {
    const [openForm, setOpenForm] = useState(false);

    const handleOpenForm = () => setOpenForm(!openForm);

    return (
        <main className="content">
            {openForm && <QuestionForm onClick={handleOpenForm}></QuestionForm>}
            <h2 className="content__header">Question</h2>
            <TestDetailsPaper test={test}></TestDetailsPaper>
            <Paper>
                <h4>Question table</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolore. Suscipit labore tempore
                    aliquid impedit in! Laborum sint praesentium incidunt odit dolor amet temporibus fuga odio omnis
                    laboriosam! Distinctio, itaque!
                </p>
                <div className="tool">
                    <div className="tool--left">
                        <div className="search__input">
                            <FontAwesomeIcon icon={icon.faMagnifyingGlass}></FontAwesomeIcon>
                            <input type="text" placeholder="Seaching" />
                        </div>
                        <Button text="Filter" icon={icon.faFilter}></Button>
                    </div>
                    <div className="tool--right">
                        <Button text="Create" icon={icon.faPlus} onClick={handleOpenForm}></Button>
                        <Button text="Delete" icon={icon.faTrashCan}></Button>
                    </div>
                </div>
                <QuestionTable></QuestionTable>
                <Pagination count={5}></Pagination>
            </Paper>
        </main>
    );
}

export default Questions;
