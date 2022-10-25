import * as icon from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './tests.scss';
import Types from '~/constants/tests';
import Paper from '~/components/Paper';
import Button from '~/components/Button';
import TestTable from './components/TestTable';
import TestForm from '~/pages/Tests/components/TestForm';

function Tests() {
    const dispatch = useDispatch();
    const action = (type) => dispatch({ type });
    const [openForm, setOpenForm] = useState(true);
    const [searchInput, setSearchInput] = useState(null);

    const handleOpenForm = () => setOpenForm(!openForm);
    const handleSetSearchInput = (event) => setSearchInput(event.currentTarget.value);
    const tests = useSelector((state) => state.rootReducer.tests);
    const searchingResult = tests.tests.filter((test) => test.title.toLowerCase().indexOf(searchInput) > -1);

    useEffect(() => {
        action(Types.FETCH_TESTS_LOADING);
    }, []);

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
                            <input type="text" placeholder="Seaching by title" onChange={handleSetSearchInput} />
                        </div>
                        <Button text="Filter" icon={icon.faFilter}></Button>
                    </div>
                    <div className="tool--right">
                        <Button text="Create" icon={icon.faPlus} onClick={handleOpenForm}></Button>
                        <Button text="Delete" icon={icon.faTrashCan}></Button>
                    </div>
                </div>
                <TestTable tests={searchInput ? searchingResult : tests.tests}></TestTable>
            </Paper>
        </main>
    );
}

export default Tests;
