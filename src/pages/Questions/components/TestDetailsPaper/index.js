import Paper from '~/components/Paper';

function TestDetailsPaper({ test }) {
    return (
        <Paper>
            {' '}
            <h3>Test details</h3>
            <p>{test.title}</p>
            <p>
                <span>Status:</span> {test.status}
            </p>
            <p>
                <span>Author:</span> {test.author}
            </p>
            <p>
                <span>Modified date:</span> {test.modifiedDate}
            </p>
        </Paper>
    );
}

export default TestDetailsPaper;
