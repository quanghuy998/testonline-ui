import { Button } from '@mui/material';
import { useState } from 'react';

import './TestForm.scss';

const selectDatas = [
    { data: false, display: 'false' },
    { data: true, display: 'true' },
];

function TestForm() {
    const [status, setStatus] = useState(false);
    const [category, setCategory] = useState(null);
    const [title, setTitle] = useState(null);

    const handleSetStatus = (event) => console.log(event.currentTarget.value);
    const handleSetCagetory = (event) => console.log(event.currentTarget.value);
    const handleSetTitle = (event) => console.log(event.currentTarget.value);

    return (
        <div className="modal">
            <form className="form modal__content">
                <h3 className="form__header">Create test</h3>
                <div className="form__content">
                    <div className="form__input">
                        <label htmlFor="status">Status</label>
                        <select>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                    </div>
                    <div className="form__input">
                        <label htmlFor="category">Category</label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            onChange={handleSetCagetory}
                            placeholder="Choose category"
                        />
                    </div>
                    <div className="form__input">
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={handleSetTitle}
                            placeholder="Enter test title"
                        />
                    </div>
                    <div className="form__input">
                        <label htmlFor="author">Author</label>
                        <input id="author" name="author" type="text" />
                    </div>
                    <div className="form__input">
                        <label htmlFor="modified-date">Modified date</label>
                        <input id="modified-date" name="modified-date" type="text" />
                    </div>
                </div>
                <div className="form__button">
                    <Button>Submit</Button>
                    <Button>Cancel</Button>
                </div>
            </form>
        </div>
    );
}

export default TestForm;
