import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Button.scss';

function Button({ text, icon, onClick }) {
    return (
        <div className="btn" onClick={onClick}>
            {icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}
            <p className="btn__title">{text}</p>
        </div>
    );
}

export default Button;
