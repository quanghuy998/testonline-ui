import './QuestionTable.scss'

const questions = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        questionType: 'Text',
        point: '9 points',
        timeLimit: '10 minutes',
    },
];

function QuestionTable() {
    return (
        <table className="table">
            <thead className="table__head">
                <tr className="table__row">
                    <td>Question</td>
                    <td>Question Type</td>
                    <td>Point</td>
                    <td>Time limit</td>
                </tr>
            </thead>
            <tbody className='table__body'>
                {questions.map((question, index) => (
                    <tr key={index} className="table__row">
                        <td>{question.title}</td>
                        <td>{question.questionType}</td>
                        <td>{question.point}</td>
                        <td>{question.timeLimit}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default QuestionTable;
