import { Pagination, Paper } from '@mui/material';

import SubmissionForm from '~/pages/Submissions/components/SubmissionForm';
import SubmissionTable from './components/SubmissionTable';
import './submissions.scss';

function Submissions() {
    return (
        <main className="content">
            <h2 className="content__header">Submissions</h2>
            <Paper className="content__container container">
                <h4>Submissions</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolore. Suscipit labore tempore
                    aliquid impedit in! Laborum sint praesentium incidunt odit dolor amet temporibus fuga odio omnis
                    laboriosam! Distinctio, itaque!
                </p>
                <SubmissionTable></SubmissionTable>
                <Pagination className="pagination" count={5}></Pagination>
            </Paper>
            <Paper className="content__container container">
                <SubmissionForm></SubmissionForm>
            </Paper>
        </main>
    );
}

export default Submissions;
