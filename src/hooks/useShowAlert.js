import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const ShowAlert = async (obj) => {
	let defaults = {
		message: null,
		type: null,
		timeOut: 2500,
		progressBar: true,
		closeWith: null,
		modal: false,
		custom_option: {},
	};
	let opciones = Extend(defaults, obj);
	let add_options = {};

	switch (opciones.type) {
		case "success":
			add_options.title = "Excelent";
			add_options = Object.assign(add_options, opciones.custom_option);
			break;
		case "error":
			add_options.title = "Error";
			add_options = Object.assign(add_options, opciones.custom_option);
			break;
		case "warning":
			add_options.title = "Warning";
			add_options = Object.assign(add_options, opciones.custom_option);
			break;
		case "info":
			add_options.title = "Information";
			add_options = Object.assign(add_options, opciones.custom_option);
			break;
	}
	var options = {
		text: opciones.message.toUpperCase(),
		icon: opciones.type,
	};
	options = Object.assign(add_options, options);
	const MySwal = withReactContent(Swal);
	MySwal.fire(options);
};
const Extend = (defaults, options) => {
	let extended = {};
	let prop;
	for (prop in defaults) {
		if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
			extended[prop] = defaults[prop];
		}
	}
	for (prop in options) {
		if (Object.prototype.hasOwnProperty.call(options, prop)) {
			extended[prop] = options[prop];
		}
	}
	return extended;
};
//export default useShowAlert;
