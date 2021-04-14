import React from 'react';
import ButtonChoise from '../components/buttons/ButtonChoise';
import ButtonSubmit from '../components/buttons/ButtonSubmit';
import Circle from '../components/Decor/Circle';
import Cross from '../components/Decor/Cross';
import Decor from '../components/Decor/Decor';
import Square from '../components/Decor/Square';
import Triangle from '../components/Decor/Triangle';
import Footer from '../components/Footer/Footer';
import Radio from '../components/Form/components/Radio/Radio';
import Slider from '../components/Form/components/Slider/Slider';
import TextArea from '../components/Form/components/TextArea/TextArea';
import SocialSubtitle from '../components/Form/components/TextInput/SocialSubtitle';
import TextInput from '../components/Form/components/TextInput/TextInput';
import Form from '../components/Form/Form';
import Header from '../components/header/Header';

export default class WorldOfWarcraft extends React.Component {
	render() {
		return(
			<div>
				<Header 
					page="wow"
					offer="Продай аккаунт в World of Warcraft по выгодной стоимости"
					img="images/hero-wow.png"
					blockClass="wow"
				>
					<ButtonChoise 
						btnName="choise"
						href="#form"
						text="Продать аккаунт"
					/>
				</Header>
				<Decor blockClass="wow-form">
					<Circle figure="circle-wow-form"/>
					<Cross figure="cross-wow-form"/>
					<Square figure="square-wow-form"/>
					<Triangle figure="triangle-wow-form"/>
				</Decor>
				<Form action="#" id="form">
					<img src="images/pics/wow/wow-item1.png" alt="" className="wow-item1"/>
					<img src="images/pics/wow/wow-item2.png" alt="" className="wow-item2"/>
					<img src="images/pics/wow/wow-item3.png" alt="" className="wow-item3"/>
					<Radio
						title="Уточните, присутствует ли на Вашем аккаунте оплаченная подписка?"
						name="subscribe"
					/>
					<TextInput title="Укажите ссылку на самого прокаченного персонажа">
						<SocialSubtitle text="Предоставь ссылку на Armory"/>
					</TextInput>
					<Slider 
						title="Расскажи сколько золотых монет в сумме на каждом персонаже?"
						name="goldsPerHero"
						max="300000"
						min="1000"
						step="1000"
					/>
					<Slider 
						title="Укажите цену за которую вы хотите продать свой аккаунт"
						name="price"
						max="300000"
						min="100"
						step="100"
					/>
					<TextArea 
						title="Опишите Ваш аккаунт более детально"
						placeholder="Например: наличие редких предметов и их названия и т.д."
						name="accDescription"
					/>
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