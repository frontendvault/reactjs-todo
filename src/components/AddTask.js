import {useState} from "react";

const AddTask = ({onAdd}) => {

    const [text,
        setText] = useState('');
    const [day,
        setDay] = useState('');
    const [reminder,
        setReminder] = useState('');

    const onSubmit = (e) => {

        if (!text) {
            alert('Enter Text')
            return;
        }
        onAdd({text, day, reminder})

        e.preventDefault();
        setText('');
        setDay('');
        setReminder(false);

    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                {/* <label className="form-label">Task</label> */}
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add task"
                    value={text}
                    onChange={(e) => {
                    setText(e.target.value)
                }}/>
            </div>
            <div className="mb-3">
                {/* <label className="form-label">Ad Day &amp; Time</label> */}
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add Day and Time"
                    value={day}
                    onChange={(e) => {
                    setDay(e.target.value)
                }}/>
            </div>
            <div className="mb-3">
                <div class="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={reminder}
                        checked={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)}/>
                    <label className="form-check-label">
                        Set Reminder
                    </label>
                </div>
            </div>
            <div className="mb-3">
                <button className="btn btn-outline-dark">Save task</button>
            </div>

        </form>

    )
}
export default AddTask;