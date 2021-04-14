import React from 'react';
import './TextInput.scss';

export default class TextInput extends React.Component {

	render() {
		return(
			<label htmlFor={this.props.name} className="page-title-label">
				{this.props.title}
				{this.props.children}
				<input 
					className="text-input page-title-label" 
					type="text" 
					id={this.props.name} 
					name={this.props.name} 
					placeholder={this.props.placeholder} 
					onChange={this.props.changeHandler}
				/>
			</label>
		)
	};
};