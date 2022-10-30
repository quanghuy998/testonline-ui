import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import './SubmissionTable.scss';

const submissions = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        candidate: 'Kym Mcgain',
        status: 'Pending',
        modifiedDate: '2022-11-10',
    },
];

function SubmissionTable() {
    return (
        <table className="table">
            <thead className="table__head">
                <tr className="table__row">
                    <td>Test</td>
                    <td>Candidate</td>
                    <td>Status</td>
                    <td>Modified date</td>
                    <td></td>
                </tr>
            </thead>
            <tbody className="table__body">
                {submissions.map((submission, index) => (
                    <tr key={index} className="table__row">
                        <td>{submission.title}</td>
                        <td>{submission.candidate}</td>
                        <td>{submission.status}</td>
                        <td>{submission.modifiedDate}</td>
                        <td>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SubmissionTable;
