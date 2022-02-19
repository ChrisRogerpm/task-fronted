import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskRegister from "../components/TaskRegister";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import "../style/global.css";

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/register-task" element={<TaskRegister />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
