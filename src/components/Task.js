import React from 'react';
import '../styles/todo.css';

function Task(props) {
	const { task } = props;
	
	return (
		<div className='task' style={{ textDecoration: task.completed ? 'line-through' : '' }}>
			{task.title}
            <button>X</button>

		</div>
	);
}
export default Task;
