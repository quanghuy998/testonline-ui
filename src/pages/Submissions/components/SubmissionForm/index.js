import { Button } from '@mui/material';

import './SubmissionForm.scss';

const submissions = [
    {
        question: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quam aliquam ducimus?',
        anwser: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero officiis dolor aut sunt. Facere maxime, libero harum consequuntur, excepturi id nesciunt, recusandae amet iure optio laudantium suscipit quas officia sapiente!',
    },
];

function SubmissionForm() {
    return (
        <form className="form">
            <h3 className="form__header">Manage submissions</h3>
            <p>
                <span>Test title:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et nisi
                voluptates cumque hic odio nesciunt, itaque fugiat reprehenderit quaerat! Commodi reprehenderit esse,
                sit ut voluptate laboriosam earum delectus enim.
            </p>
            <div className="submission__details">
                <div className="submission__details--left">
                    <p>
                        <span>Candidate name:</span> Huynh Duc Quang Huy
                    </p>
                    <p>
                        <span>Email:</span> huy.huynhducquang@orientsoftware.com
                    </p>
                    <p>
                        <span>Submit date:</span> 2022-11-10
                    </p>
                </div>
                <div className="submission__details--right">
                    <p>
                        <span>Axaminer:</span>
                    </p>
                    <p>
                        <span>Status:</span> Pending
                    </p>
                    <p>
                        <span>Score:</span>
                    </p>
                </div>
            </div>
            <table className="table">
                <thead className="table__head">
                    <tr className="table__row">
                        <td>Anwsers</td>
                        <td>Score</td>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {submissions.map((submission, index) => (
                        <tr key={index} className="table__row">
                            <td>
                                <p>
                                    <span>Questions: </span> {submission.question}
                                </p>
                                <p>
                                    <span>Anwsers: </span> {submission.question}
                                </p>
                            </td>
                            <td>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="form__button">
                <Button>Submit</Button>
                <Button>Cancel</Button>
            </div>
        </form>
    );
}

export default SubmissionForm;
