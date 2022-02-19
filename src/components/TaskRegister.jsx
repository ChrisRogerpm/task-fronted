import React, { useState } from "react";
import usePostData from "../hooks/usePostData";
import { useNavigate } from "react-router-dom";

const TaskRegister = () => {
	const [task, setTask] = useState({ name: "", completed: true });
	const navigate = useNavigate();
	const handleInputChange = ({ target }) => {
		setTask({ ...task, [target.name]: target.value });
	};
	const handleToggleTaskCompleted = ({ target }) => {
		setTask({ ...task, completed: !target.value });
	};
	const TaskRegisterForm = async () => {
		let { status } = await usePostData({
			url: "TaskRegisterJson",
			dataForm: task,
		});
		if (status) {
			navigate("/");
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		TaskRegisterForm();
	};
	return (
		<>
			<h1 className="text-center">TASK REGISTER</h1>
			<form onSubmit={handleSubmit} autoComplete="off">
				<div className="form-group">
					<label>Name Task</label>
					<input
						type="text"
						className="form-control"
						name="name"
						value={task.name}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="form-check mb-3">
					<input
						type="checkbox"
						className="form-check-input checkCustom"
						name="completed"
						value={task.completed}
						defaultChecked={task.completed}
						onChange={handleToggleTaskCompleted}
					/>
					<label className="form-check-label pl-2 pt-1">Task Completed</label>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</>
	);
};

export default TaskRegister;
