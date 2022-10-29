import { Paper } from "@mui/material";

function TestDetailsPaper({ test }) {
    return (
        <Paper className="container content__container">
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
