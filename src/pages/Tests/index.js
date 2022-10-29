import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Input, InputAdornment, Paper } from '@mui/material';

import './tests.scss';
import TestTable from './components/TestTable';
import TestForm from '~/pages/Tests/components/TestForm';
import Loader from '~/components/Loader';
import { testsAction } from '~/reducers/testsSlice';

function Tests() {
    const [searchInput, setSearchInput] = useState(null);
    const dispatch = useDispatch();
    
    const tests = useSelector((state) => state.rootReducer.tests);
    const handleSetSearchInput = (event) => setSearchInput(event.currentTarget.value);
    const searchingResult = tests.tests.filter((test) => test.title.toLowerCase().indexOf(searchInput) > -1);

    useEffect(() => {
        dispatch(testsAction.fetchTestsLoading());
    }, []);

    const toolElement = (
        <div className="page__tool">
            <div className="page__tool--left">
                <Input
                    onChange={handleSetSearchInput}
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
                <Button variant="outlined">Filter</Button>
            </div>
            <div className="page__tool--right">
                <Button variant="outlined" color="success">
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
            {false && <TestForm></TestForm>}
            <h2 className="content__header">Tests</h2>
            <Paper className="container content__container">
                <h4>Test table</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolore. Suscipit labore tempore
                    aliquid impedit in! Laborum sint praesentium incidunt odit dolor amet temporibus fuga odio omnis
                    laboriosam! Distinctio, itaque!
                </p>
                {toolElement}
                {tests.status === 'loading' ? (
                    <Loader></Loader>
                ) : (
                    <TestTable tests={searchInput ? searchingResult : tests.tests}></TestTable>
                )}
            </Paper>
        </main>
    );
}

export default Tests;
