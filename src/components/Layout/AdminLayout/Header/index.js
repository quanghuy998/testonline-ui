import * as icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';

import './header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header--right">
                <div className="menu-btn">
                    <Button icon={icon.faBars}></Button>
                </div>
                <div className="breadcrumbs">
                    <p>Home Application</p>
                    <span>Application</span>
                </div>
            </div>
            <div className="header--left">
                <Button icon={icon.faGear}></Button>
                <Button icon={icon.faBell}></Button>
                <Button text="Sign in" icon={icon.faUser}></Button>
            </div>
        </header>
    );
}

export default Header;
