import React from 'react'

function Board({ task, index, taskList, setTaskList }) {

    const handleDelete = () => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)));
    }
    return (
        <div className='max-w-md rounded-xl p-2 mt-4 flex flex-row items-center justify-center bg-white border border-gray-200 rounded-lg shadow'>
            <p>{task}</p>
            <button
                className='bg-red-500 text-white rounded-lg py-1 px-2 p-4 ml-4'
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}

export default Board
