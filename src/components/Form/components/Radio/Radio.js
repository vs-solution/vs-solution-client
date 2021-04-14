import React from 'react';
import './Radio.scss';

export default class Radio extends React.Component {
	render() {
		return(
			<label htmlFor={this.props.name} className="page-title-label">
				{this.props.title}
				<div className="d-flex radio-container">
					<label className="radio page-title-label radio-label">Да
						<input type="radio" name={this.props.name} id={this.props.name} onChange={this.props.changeHandler} defaultChecked/>
						<span className="radio-mark"></span>
					</label>
					<label className="radio page-title-label radio-label">Нет
						<input type="radio" name={this.props.name} id={this.props.name} onChange={this.props.changeHandler}/>
						<span className="radio-mark"></span>
					</label>
				</div>
			</label>
		)
	};
};