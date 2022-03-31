import React from 'react';
import { useDispatch } from 'react-redux';
import { ToggleTodoCompleted, TodoRemoved } from '../redux/actions';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const toggleCompleteness = () => {
		dispatch({
			type: ToggleTodoCompleted,
			payload: { id }
		})
	};
	const removeTodo = () => {
		dispatch({
			type: TodoRemoved,
			payload: { id }
		})
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mx-1' checked={completed} onClick={toggleCompleteness}>
					</input>
					{title}&nbsp;
					<span className='fw-bold'>
						{completed ? "(COMPLETED)": ""}
					</span>
				</span>
				<button className='btn btn-danger' onClick={removeTodo}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;