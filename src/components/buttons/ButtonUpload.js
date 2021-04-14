import React from 'react';
import './Buttons.scss';

export default class ButtonUpload extends React.Component {
	render() {
		return(
			<>
				<button type="file" className="button-upload">Загрузить файл</button>
			</>
		)
	};
};