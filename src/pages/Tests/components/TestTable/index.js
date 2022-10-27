import Table from '~/components/Table';
import TableRow from '~/components/TableRow';
import TableBody from '~/components/TableBody';
import TableCell from '~/components/TableCell';
import TableHead from '~/components/TableHead';
import Pagination from '~/components/Pagination';
import { Fragment, useState } from 'react';
import Select from '~/components/Select';

// const tests = [
//     {
//         title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//         status: 'Pending',
//         author: 'Andy',
//         modifiedDate: '2022-01-01',
//     },
//     {
//         title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//         status: 'Pending',
//         author: 'Andy',
//         modifiedDate: '2022-01-01',
//     },
//     {
//         title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//         status: 'Pending',
//         author: 'Andy',
//         modifiedDate: '2022-01-01',
//     },
// ];
const rowsPerPageee = [
    { value: 5, display: 5 },
    { value: 10, display: 10 },
    { value: 15, display: 15 },
    { value: 20, display: 20 },
];

function TestTable({ tests }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const indexOfLast = currentPage * rowsPerPage;
    const indexOfFirst = indexOfLast - rowsPerPage;
    const paginationCount = Math.ceil(tests.length / rowsPerPage);
    const showedTests = tests.slice(indexOfFirst, indexOfLast);

    const handleSetCurrentPage = (page) => {
        if (page > 0 && page <= paginationCount) setCurrentPage(page);
    };
    const handleSetRowsPerPage = (event) => setRowsPerPage(event.currentTarget.value);

    return (
        <Fragment>
            <div>
                Rows per page: <Select datas={rowsPerPageee} onChange={handleSetRowsPerPage}></Select>
            </div>
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
                    {showedTests.map((test, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <input type="checkbox" name="" value="" />
                            </TableCell>
                            <TableCell className="table__cell--main">{test.title}</TableCell>
                            <TableCell>{test.isPublish ? 'True' : 'False'}</TableCell>
                            <TableCell>{test.author}</TableCell>
                            <TableCell>{test.modifiedDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination count={paginationCount} onClick={handleSetCurrentPage}></Pagination>
        </Fragment>
    );
}

export default TestTable;
