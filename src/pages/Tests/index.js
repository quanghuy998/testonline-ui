import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';

import './tests.scss';
import Pagination from '~/components/Pagination';
import Button from '~/components/Button';
import Paper from '~/components/Paper';
import TestForm from '~/pages/Tests/components/TestForm';
import { useState } from 'react';
import TestTable from './components/TestTable';

function Tests() {
    const [openForm, setOpenForm] = useState(false);

    const handleOpenForm = () => setOpenForm(!openForm);

    return (
        <main className="content">
            {openForm && <TestForm onClick={handleOpenForm}></TestForm>}
            <h2 className="content__header">Tests</h2>
            <Paper>
                <h4>Test table</h4>
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
                <TestTable></TestTable>
                <Pagination count={5}></Pagination>
            </Paper>
        </main>
    );
}

export default Tests;
