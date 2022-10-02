import Table from '~/components/Table';
import TableBody from '~/components/TableBody';
import TableCell from '~/components/TableCell';
import TableHead from '~/components/TableHead';
import TableRow from '~/components/TableRow';

const tests = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        status: 'Pending',
        author: 'Andy',
        modifiedDate: '2022-01-01',
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        status: 'Pending',
        author: 'Andy',
        modifiedDate: '2022-01-01',
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        status: 'Pending',
        author: 'Andy',
        modifiedDate: '2022-01-01',
    },
];

function TestTable() {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <input type="checkbox" name="" value="" />
                    </TableCell>
                    <TableCell className="table__cell--main">Title</TableCell>
                    <TableCell>Publish</TableCell>
                    <TableCell>Create by</TableCell>
                    <TableCell>Modified data</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tests.map((test, index) => (
                    <TableRow key={index}>
                        <TableCell>
                            <input type="checkbox" name="" value="" />
                        </TableCell>
                        <TableCell className="table__cell--main">{test.title}</TableCell>
                        <TableCell>{test.status}</TableCell>
                        <TableCell>{test.author}</TableCell>
                        <TableCell>{test.modifiedDate}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default TestTable;
