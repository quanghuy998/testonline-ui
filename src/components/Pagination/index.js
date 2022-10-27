import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';

import './Pagination.scss';
import { useState } from 'react';

function Pagination({ count, onClick }) {
    const [currentPage, setCurrentPage] = useState(1);

    const handleSetCurrentPage = (event) => setCurrentPage(event.currentTarget.value);

    const pagination = [];
    for (let i = 0; i < count; i++) {
        pagination.push(
            <li className="pagination__item" key={i} onClick={() => onClick(i + 1)}>
                {i + 1}
            </li>,
        );
    }

    return (
        <ul className="pagination">
            <li className="pagination__left">
                <FontAwesomeIcon icon={icon.faChevronLeft}></FontAwesomeIcon>
                <i className="fa-solid fa-chevron-left"></i>
            </li>
            {pagination}
            <li className="pagination__right">
                <FontAwesomeIcon icon={icon.faChevronRight}></FontAwesomeIcon>
            </li>
        </ul>
    );
}

export default Pagination;
