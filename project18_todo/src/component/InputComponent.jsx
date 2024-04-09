import { useState } from "react"

function InputComponent({ taskList, setTaskList }) {
    const [input, setInput] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, input]);
        setInput("");
    }

    return (
        <>
            <form className="flex flex-row items-center gap-3">
                <input
                    className="border rounded-lg text-lg px-2 py-1 "
                    type="text"
                    placeholder=" Add a task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="bg-green-800 text-white rounded-lg px-3 py-1 hover: opacity-90"
                    onClick={handleAddTask}
                >Add</button>
            </form>
        </>
    )
}

export default InputComponent
