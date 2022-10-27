import { useState } from 'react';

import './TestForm.scss';
import Select from '~/components/Select';
import Button from '../../../../components/Button';

const selectDatas = [
    { data: false, display: 'false' },
    { data: true, display: 'true' },
];

function TestForm({ onClick }) {
    const [status, setStatus] = useState(false);

    const handleSetStatus = (event) => console.log(event.currentTarget.value);

    return (
        <div className="modal">
            <form className="form modal__content">
                <h3 className="form__header">Create test</h3>
                <div className="form__content">
                    <div className="form__input">
                        <label htmlFor="status">Status</label>
                        <Select datas={selectDatas} onChange={handleSetStatus}></Select>
                    </div>
                    <div className="form__input">
                        <label htmlFor="category">Category</label>
                        <input id="category" name="category" type="text" placeholder="Choose category" />
                    </div>
                    <div className="form__input">
                        <label htmlFor="title">Title</label>
                        <input id="title" name="title" type="text" placeholder="Enter test title" />
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
                    <Button text="Submit"></Button>
                    <Button text="Cancel" onClick={onClick}></Button>
                </div>
            </form>
        </div>
    );
}

export default TestForm;
