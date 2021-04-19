import axios from 'axios';

export const submitData = async (url, data) => {
	try {
		await axios.post(url, data, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => console.log(response));
	} catch (error) {
		console.log(error);
	}
};