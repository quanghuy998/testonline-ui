import './TableCell.scss';

function TableCell({ children, className }) {
    return <td className={className ? 'table__cell ' + className : "table__cell"}>{children}</td>;
}

export default TableCell;
