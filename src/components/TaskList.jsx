import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import usePostData from "../hooks/usePostData";

const TaskList = () => {
	const [tasks, setTasks] = useState([]);
	const [query, setQuery] = useState("");

	const TaskListData = () => {
		useGetData({
			url: "TaskListJson",
		}).then((data) => {
			setTasks(data.data);
		});
	};
	const ToggleTaskCompleted = (id) => {
		const updatedTasks = tasks.map((task) => {
			if (id === task.id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedTasks);
		usePostData({
			url: "TaskUpdateJson",
			dataForm: {
				id: id,
			},
		});
	};

	const TaskDelete = (id) => {
		const remainingTasks = tasks.filter((task) => id !== task.id);
		setTasks(remainingTasks);
		usePostData({
			url: "TaskDeleteJson",
			dataForm: {
				id: id,
			},
		});
	};

	const TaskSearch = () => {
		return tasks.filter((task) => task.name.toLowerCase().includes(query));
	};

	useEffect(() => {
		TaskListData();
	}, []);
	return (
		<>
			<h1 className="text-center">TASK LIST</h1>
			<Link className="btn btn-primary btn-sm mb-3" to="/register-task">
				Add Task
			</Link>
			<input
				type="text"
				className="form-control mb-3"
				placeholder="Search..."
				onChange={(e) => setQuery(e.target.value)}
			/>
			<table className="table table-striped- table-bordered table-hover">
				<thead>
					<tr>
						<th className="text-center">ID</th>
						<th>NAME</th>
						<th className="text-center">COMPLETED</th>
						<th className="text-center">OPTION</th>
					</tr>
				</thead>
				<tbody>
					{TaskSearch().map((task) => (
						<tr key={task.id}>
							<td className="text-center">{task.id}</td>
							<td>{task.name}</td>
							<td className="text-center">
								<input
									className="checkCustom"
									type="checkbox"
									defaultChecked={task.completed}
									onChange={() => ToggleTaskCompleted(task.id)}
								/>
							</td>
							<td className="text-center">
								<button
									type="button"
									className="btn btn-sm btn-danger ml-2"
									onClick={() => TaskDelete(task.id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default TaskList;
