import Table from '~/components/Table';
import TableBody from '~/components/TableBody';
import TableCell from '~/components/TableCell';
import TableHead from '~/components/TableHead';
import TableRow from '~/components/TableRow';

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
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <input type="checkbox" name="" value="" />
                    </TableCell>
                    <TableCell className="table__cell--main">Question</TableCell>
                    <TableCell>Question Type</TableCell>
                    <TableCell>Point</TableCell>
                    <TableCell>Time limit</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {questions.map((question, index) => (
                    <TableRow key={index}>
                        <TableCell>
                            <input type="checkbox" name="" value="" />
                        </TableCell>
                        <TableCell className="table__cell--main">{question.title}</TableCell>
                        <TableCell>{question.questionType}</TableCell>
                        <TableCell>{question.point}</TableCell>
                        <TableCell>{question.timeLimit}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default QuestionTable;
