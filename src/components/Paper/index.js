import './Paper.scss';

function Paper({ children, styles }) {
    return (
        <div className="paper" style={styles}>
            {children}
        </div>
    );
}

export default Paper;
