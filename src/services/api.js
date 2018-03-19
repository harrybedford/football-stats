import axios from 'axios';

export default (url) => {
	const params = {
		"X-Auth-Token": "2698794f3ede4d0c9b448822a55978c0"
	};
	return axios
		.get(url, params);
};