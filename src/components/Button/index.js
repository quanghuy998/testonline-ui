import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Button.scss';

function Button({ text, icon, onClick, className = null }) {
    const classNameCustom = className ? "btn " + className : "btn"
    return (
        <div className={classNameCustom} onClick={onClick}>
            {icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}
            <p className="btn__title">{text}</p>
        </div>
    );
}

export default Button;
