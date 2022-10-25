import * as icon from '@fortawesome/free-solid-svg-icons';

import './menu.scss';
import MenuList from '../../../MenuList';
import DonateCard from '~/components/DonateCard';

const dashboardItem = [{ title: 'Dashboards', icon: icon.faShop }];

const appItems = [
    { title: 'Starter', icon: icon.faStar, link: '#' },
    { title: 'Settings', icon: icon.faGears, link: '#' },
    { title: 'Authentication', icon: icon.faUsers, link: '#' },
    { title: 'Users', icon: icon.faUser, link: '#' },
];

const modulesItems = [
    { title: 'Tests', icon: icon.faBook, link: 'tests' },
    { title: 'Questions', icon: icon.faQuestion, link: 'questions' },
    { title: 'Submissions', icon: icon.faClosedCaptioning, link: 'submissions' },
    { title: 'Results', icon: icon.faSquarePollVertical, link: 'exam-results' },
];

function Menu() {
    return (
        <div className="menu">
            <div className="container">
                <div className="menu__logo">
                    <a href="index.html" className="logo">
                        <h3>Test Online</h3>
                    </a>
                </div>
                <MenuList items={dashboardItem}></MenuList>
                <MenuList header="App" items={appItems}></MenuList>
                <MenuList header="Modules" items={modulesItems}></MenuList>
                <DonateCard></DonateCard>
            </div>
        </div>
    );
}

export default Menu;
