import React, { useRef } from 'react';

function CreateTask({ addTask }) {
	const inputValue = useRef();

	const handleSubmit = e => {
		e.preventDefault();
		if (inputValue.current.value !== '') {
			addTask(inputValue.current.value);
			inputValue.current.value = '';
		}
	};

	return (
		// po co jest ten action
		<form onSubmit={handleSubmit} action=''>
			<label htmlFor='todo'>
				i have TODO:
				<input type='text' name='todo' id='todo' ref={inputValue} />
			</label>
			<input type='submit' />
            {/* teraz musze dodac 2 buttony, jeden od zakoczenia zadania. Drugi od usuwania zadania.
            i moze trzeci od visiblity, tzn w histori complete bedzie true, ale wyjmie sie go z wartstwy wizualznej */}
		</form>
	);
}

export default CreateTask;
