import React from 'react';
import ButtonChoise from '../components/buttons/ButtonChoise';
import TextArea from '../components/Form/components/TextArea/TextArea';
import TextInput from '../components/Form/components/TextInput/TextInput';
import Upload from '../components/Form/components/Upload/Upload';
import Form from '../components/Form/Form';
import Header from '../components/header/Header';
import SocialSubtitle from '../components/Form/components/TextInput/SocialSubtitle';
import ButtonUpload from '../components/buttons/ButtonUpload';
import Footer from '../components/Footer/Footer';
import ButtonSubmit from '../components/buttons/ButtonSubmit';
import Decor from '../components/Decor/Decor';
import Circle from '../components/Decor/Circle';
import Square from '../components/Decor/Square';
import Triangle from '../components/Decor/Triangle';
import Cross from '../components/Decor/Cross';

export default class LeagueOfLegends extends React.Component {
	render() {
		return(
			<div>
				<Header 
					page="lol"
					offer="Продай аккаунт в League of Legends по выгодной стоимости"
					img="images/hero-lol.png"
					blockClass="lol"
				>
					<ButtonChoise
						btnName="choise"
						href="#form"
						text="Продать аккаунт"
					/>
				</Header>
				<Decor blockClass="lol-form">
					<Square figure="square-lol-form"/>
					<Circle figure="circle-lol-form"/>
					<Triangle figure="triangle-lol-form"/>
					<Cross figure="cross-lol-form" />
				</Decor>
				<Form action="#" id="form">
					<img src="images/pics/lol/lol-item1.png" alt="" className="lol-item1"/>
					<img src="images/pics/lol/lol-item2.png" alt="" className="lol-item2"/>
					<img src="images/pics/lol/lol-item3.png" alt="" className="lol-item3"/>
					<img src="images/pics/lol/lol-item4.png" alt="" className="lol-item4"/>
					<TextInput 
						title="На каком сервере находится Ваш аккаунт?"
						placeholder="Например: Россия"
						name="serverLocation"
					/>
					<TextInput 
						title="Укажите уровень Вашего профиля"
						placeholder="Например: 10"
						name="profileLevel"
					/>
					<TextInput 
						title="Укажите количество чемпионов на Вашем аккаунте"
						placeholder="Максимально : 154"
						name="numberChamps"
					/>
					<TextArea 
						title="Какие скины есть на Вашем аккаунте?"
						placeholder="Напишите название скинов через запятую"
						name="skins"
					/>
					<TextArea 
						title="Опишите подробно свой аккаунт"
						placeholder="Например : Укажите колличество часов игры, напишите подробнее о скинах на аккаунте и т.д."
						name="accountDescription"
					/>
					<Upload title="Загрузите скриншот вашего аккаунта">
						<SocialSubtitle text="Без этого шага Ваша анкета будет недействительна" />
						<ButtonUpload />
					</Upload>
					<TextInput
						title="Укажите контактную информацию"
						placeholder="Например: xxxxxxx@gmail.com"
						name="contacts"
					>
						<SocialSubtitle text="@Telegram , VK , Номер тел. , Эл. почта и т.д."/>
					</TextInput>
					<ButtonSubmit />
				</Form>
				<Footer />
			</div>
		)
	};
};