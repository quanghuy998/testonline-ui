import './footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <p>
                © 2022, made with by <span>Huynh Duc Quang Huy</span> for a better web.
            </p>
            <ul className="footer__list">
                <li className="footer__item">
                    <a href="#" className="footer__link">
                        About Us
                    </a>
                    <a href="#" className="footer__link">
                        Blog
                    </a>
                    <a href="#" className="footer__link">
                        Contact
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
