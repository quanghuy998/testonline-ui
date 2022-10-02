import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';

import './submissions.scss';
import Button from '~/components/Button';
import Pagination from '~/components/Pagination';
import Paper from '~/components/Paper';
import SubmissionForm from '~/pages/Submissions/components/SubmissionForm';
import SubmissionTable from './components/SubmissionTable';


function Submissions() {
    return (
        <main className="content">
            <h2 className="content__header">Submissions</h2>
            <Paper>
                <h4>Submissions</h4>
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
                        <Button text="Delete" icon={icon.faTrashCan}></Button>
                    </div>
                </div>
                <SubmissionTable></SubmissionTable>
                <Pagination count={5}></Pagination>
            </Paper>
            <Paper>
                <SubmissionForm></SubmissionForm>
            </Paper>
        </main>
    );
}

export default Submissions;
