import React, { useState } from 'react';
import '../styles/todo.css';

import Task from './Task';
import CreateTask from './CreateTask';

function Todo() {
	const exampleTasks = [
		{
			title: 'Grab some Pizza',
			completed: true,
		},
		{
			title: 'Do your workout',
			completed: true,
		},
		{
			title: 'Hangout with friends',
			completed: false,
		},
	];

	const [tasks, setTasks] = useState(exampleTasks);

	const addTask = title => {
		const newArrayTask = [...tasks, { title: title, completed: false }];
		setTasks(newArrayTask)
	};

	return (
		<div className='todo-container'>
			<h4 className='header'>TODO - ITEMS</h4>
			<div className='tasks'>
				{tasks.map((task, index) => {
					return <Task task={task} index={index} key={index} />;
				})}
			</div>
			<div className='create-task'>
				<CreateTask addTask={addTask}/>
			</div>
		</div>
	);
}
export default Todo; 
