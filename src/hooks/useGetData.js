import { api } from "../constants/api";
import axios from "axios";

const useGetData = async (obj) => {
	const res = axios({
		method: "GET",
		url: api.url + obj.url,
	}).then(function (response) {
		const { data } = response;
		return data;
	});
	return res;
};

export default useGetData;
