import './Home.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Types from '../../constants/tests';

function Home() {
    // const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const action = (type) => dispatch({ type });

    return (
        <div className="content__header">
            <button onClick={() => action(Types.FETCH_TESTS_LOADING)}>Fetch tests</button>
        </div>
    );
}

export default Home;
