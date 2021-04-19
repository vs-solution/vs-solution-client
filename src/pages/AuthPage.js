import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ButtonSubmit from '../components/buttons/ButtonSubmit';
import Footer from '../components/Footer/Footer';
import TextInput from '../components/Form/components/TextInput/TextInput';
import Form from '../components/Form/Form';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const AuthPage = () => {
	const { login } = useContext(AuthContext);
	
	const loginHandler = async (event) => {
		event.preventDefault();
		const data = {
				email: event.target[0].value,
				password: event.target[1].value
			};
		try {
			await axios.post('/api/auth/login', data, {
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(response => {
				login(response.data.token, response.data.userId);
			})
			
		} catch (error) {
			console.log(error);
		}
	};
	const registerHandler = async (event) => {
		event.preventDefault();
		const data = {
			email: event.target[0].value,
			name: event.target[1].value,
			password: event.target[2].value
		};
		try {
			await axios.post('/api/auth/register', data, {
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(response => console.log(response))
		} catch (error) {
			console.log(error);
		}
	}

		return(
			<BrowserRouter>
				<Switch>
					<React.Fragment>
						<Route path="/login">
							<Form formTitle="Заполните поля для входа в систему" submitHandler={loginHandler}>
								<TextInput 
									title="Введите адрес электронной почты"
									placeholder="Например: example@mail.ru"
									name="email"
									type="email"
									required
								/>
								<TextInput 
									title="Введите пароль"
									placeholder="Password"
									name="password"
									type="password"
									required
									minLength="6"
								/>
								<ButtonSubmit btnText="Войти"/>
									<p className="page-title-label text-center py-5">или</p>
								<Link to="/register">
									<p className="page-title-label text-center">Зарегистрируйтесь для входа в систему</p>
								</Link >
							</Form>
							<Footer />
						</Route>

						<Route path="/register">
							<Form formTitle="Заполните поля для регистрации в системе" submitHandler={registerHandler}>
								<TextInput 
									title="Введите адрес электронной почты"
									placeholder="Например: example@mail.ru"
									name="email"
									type="email"
									required
								/>
								<TextInput 
									title="Введите свое имя"
									placeholder="Имя или Фамилия или Nickname"
									name="name"
									type="text"
								/>
								<TextInput 
									title="Введите пароль"
									placeholder="Password"
									name="password"
									type="password"
									required
								/>
								<ButtonSubmit btnText="Зарегистрироваться"/>
									<p className="page-title-label text-center py-5">или</p>
								<Link to="/login">
									<p className="page-title-label text-center">Войдите в систему, если вы уже зарегистрированы</p>
								</Link >
							</Form>
							<Footer />
						</Route>
					</React.Fragment>
				</Switch>
			</BrowserRouter>
		)
	};

export default AuthPage;