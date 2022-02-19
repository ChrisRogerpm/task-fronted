import { api } from "../constants/api";
import axios from "axios";
import { ShowAlert } from "../hooks/useShowAlert";

const useGetData = async (obj) => {
	const res = axios({
		method: "POST",
		url: api.url + obj.url,
		data: obj.dataForm,
	}).then(function (response) {
		const { data } = response;
		let status = data.status;
		let message = data.message;
		if (status) {
			ShowAlert({
				message: message,
				type: "success",
			});
		} else {
			ShowAlert({
				message: message,
				type: "error",
			});
		}
		return data;
	});
	return res;
};

export default useGetData;
