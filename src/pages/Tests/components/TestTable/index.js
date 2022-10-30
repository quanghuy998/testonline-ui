import { IconButton, Pagination } from '@mui/material';
import { Fragment, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

import './TestTable.scss';

function TestTable({ tests }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const indexOfLast = currentPage * rowsPerPage;
    const indexOfFirst = indexOfLast - rowsPerPage;
    const paginationCount = Math.ceil(tests.length / rowsPerPage);
    const showedTests = tests.slice(indexOfFirst, indexOfLast);
    const handleSetCurrentPage = (event, value) => {
        setCurrentPage(value);
    };
    const handleSetRowsPerPage = (event) => setRowsPerPage(event.currentTarget.value);

    const rowsPerPageSelect = (
        <select onChange={handleSetRowsPerPage}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
        </select>
    );
    return (
        <Fragment>
            <div>Rows per page: {rowsPerPageSelect}</div>
            <table className="table">
                <thead className="table__head">
                    <tr className="table__row">
                        <td style={{ width: '40%' }}>Title</td>
                        <td style={{ width: '10%' }}>Publish</td>
                        <td style={{ width: '15%' }}>Create by</td>
                        <td style={{ width: '20%' }}>Modified data</td>
                        <td style={{ width: '5%' }}></td>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {showedTests.map((test, index) => (
                        <tr className="table__row" key={index}>
                            <td>{test.title}</td>
                            <td>{test.isPublish ? 'True' : 'False'}</td>
                            <td>{test.author}</td>
                            <td>{test.modifiedDate}</td>
                            <td>
                                <IconButton size="small">
                                    <EditIcon />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                className="pagination"
                count={paginationCount}
                page={currentPage}
                onChange={handleSetCurrentPage}
            ></Pagination>
        </Fragment>
    );
}

export default TestTable;
