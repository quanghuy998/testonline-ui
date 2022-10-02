import './Table.scss';

function Table({ columns, rows = null }) {
    return (
        <table className="table">
            <thead>
                <tr className="table__row">
                    {columns.map((column, index) => (
                        <th className={column.className ? 'table__col ' + column.className : 'table__col'} key={index}>
                            {column.data ? column.data : column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows &&
                    rows.map((row, index) => (
                        <tr className="table__row" key={index}>
                            {row.first && (
                                <td
                                    className={row.first.className ? 'table__col ' + row.first.className : 'table__col'}
                                >
                                    {row.first.data ? row.first.data : row.first}
                                </td>
                            )}
                            {row.secound && (
                                <td
                                    className={
                                        row.secound.className ? 'table__col ' + row.secound.className : 'table__col'
                                    }
                                >
                                    {row.secound.data ? row.secound.data : row.secound}
                                </td>
                            )}
                            {row.third && (
                                <td
                                    className={row.third.className ? 'table__col ' + row.third.className : 'table__col'}
                                >
                                    {row.third.data ? row.third.data : row.third}
                                </td>
                            )}
                            {row.forth && (
                                <td
                                    className={row.forth.className ? 'table__col ' + row.forth.className : 'table__col'}
                                >
                                    {row.forth.data ? row.forth.data : row.forth}
                                </td>
                            )}
                            {row.fifth && (
                                <td
                                    className={row.fifth.className ? 'table__col ' + row.fifth.className : 'table__col'}
                                >
                                    {row.fifth.data ? row.fifth.data : row.fifth}
                                </td>
                            )}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}

export default Table;
