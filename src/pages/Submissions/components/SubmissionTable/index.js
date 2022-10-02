import Table from '~/components/Table';
import TableBody from '~/components/TableBody';
import TableCell from '~/components/TableCell';
import TableHead from '~/components/TableHead';
import TableRow from '~/components/TableRow';

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
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <input type="checkbox" name="" value="" />
                    </TableCell>
                    <TableCell>Test</TableCell>
                    <TableCell>Candidate</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Modified date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {submissions.map((submission, index) => (
                    <TableRow key={index}>
                        <TableCell>
                            <input type="checkbox" name="" value="" />
                        </TableCell>
                        <TableCell>{submission.title}</TableCell>
                        <TableCell>{submission.candidate}</TableCell>
                        <TableCell>{submission.status}</TableCell>
                        <TableCell>{submission.modifiedDate}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default SubmissionTable;
