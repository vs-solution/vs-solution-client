import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonSubmit from '../components/buttons/ButtonSubmit';
import Footer from '../components/Footer/Footer';
import TextInput from '../components/Form/components/TextInput/TextInput';
import Form from '../components/Form/Form';

export default class Login extends React.Component {
	render() {
		return(
			<div>
				<Form formTitle="Заполните поля для входа в систему">
					<TextInput 
						title="Введите адрес электронной почты"
						placeholder="Например: example@mail.ru"
						name="email"
					/>
					<TextInput 
						title="Введите пароль"
						placeholder="Password"
						name="password"
					/>
					<ButtonSubmit btnText="Войти"/>
						<p className="page-title-label text-center py-5">или</p>
					<NavLink to="/register">
						<p className="page-title-label text-center">Зарегистрируйтесь для входа в систему</p>
					</NavLink >
				</Form>
				<Footer />
			</div>
		)
	};
};