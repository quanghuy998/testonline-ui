import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './MenuList.scss';

function MenuList({ header, items }) {
    return (
        <ul className="menu-list">
            <span className="menu-list__header">{header}</span>
            {items.map((item, index) => (
                <li className="menu-list__item" key={index}>
                    <a href={item.link} className="menu-list__link">
                        {item.icon && <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>}
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default MenuList;
