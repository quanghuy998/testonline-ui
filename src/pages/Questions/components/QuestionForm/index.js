import Button from '../../../../components/Button';

import './QuestionForm.scss';

function QuestionForm({ onClick }) {
    return (
        <div className="modal">
            <form className="form modal__content">
                <h3 className="form__header">Manage quesion</h3>
                <div className="form__content">
                    <div className="form__input">
                        <label for="question-text">Question text</label>
                        <input id="question-text" name="question-text" type="text" placeholder="Enter question text" />
                    </div>
                    <div className="form__input">
                        <label for="question-type">Question type</label>
                        <input id="question-type" name="question-type" type="text" placeholder="Choose question type" />
                    </div>
                    <div className="form__input">
                        <label for="point">Point</label>
                        <input id="point" name="point" type="text" placeholder="Enter question point" />
                    </div>
                    <div className="form__input">
                        <label for="time-limit">Time limit</label>
                        <input id="time-limit" name="time-limit" type="text" placeholder="Enter time limit" />
                    </div>
                    <div className="form__input">
                        <label for="author">Author</label>
                        <input id="author" name="author" type="text" value="Andy" />
                    </div>
                    <div className="form__input">
                        <label for="modified-date">Modified date</label>
                        <input id="modified-date" name="modified-date" type="text" value="2022-01-01" />
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

export default QuestionForm;
