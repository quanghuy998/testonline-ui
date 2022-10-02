import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';

import './layout.scss';

function AdminLayout({ children }) {
    return (
        <div className="wrapper">
            <Menu />
            <div className="main">
                <div className="container">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
