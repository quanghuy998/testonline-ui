import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';

import './Pagination.scss';

function Pagination({ count }) {
    const pagination = [];
    for (let i = 0; i < count; i++) {
        pagination.push(<li className="pagination__item" key={i}>{i+1}</li>);
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
