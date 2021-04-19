import React from 'react';
import ButtonChoise from '../components/buttons/ButtonChoise';
import ButtonSubmit from '../components/buttons/ButtonSubmit';
import Circle from '../components/Decor/Circle';
import Cross from '../components/Decor/Cross';
import Decor from '../components/Decor/Decor';
import Square from '../components/Decor/Square';
import Triangle from '../components/Decor/Triangle';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Form/components/Slider/Slider';
import SocialSubtitle from '../components/Form/components/TextInput/SocialSubtitle';
import TextInput from '../components/Form/components/TextInput/TextInput';
import Form from '../components/Form/Form';
import Header from '../components/header/Header';
import { submitData } from '../hooks/submit.hook';

export default class Hearthstone extends React.Component {
	constructor(props) {
		super(props)

		this.submitHearthstone = this.submitHearthstone.bind(this);
	}

	async submitHearthstone(event) {
		const data = {
			numberLegendCard: event.target[0].value,
			numberGoldenCard: event.target[1].value,
			numberGolds: event.target[2].value,
			numberDust: event.target[3].value,
			hsReplayLink: event.target[4].value,
			price: event.target[5].value,
			contacts: event.target[6].value
		};
		event.preventDefault();
		submitData('/sell/account/hearthstone', data);
	}
	render() {
		return(
			<div>
				<Header
					page="hs"
					offer="Продай аккаунт в Hearthstone по выгодной стоимости"
					img="images/hero-hs.png"
					blockClass="hs"
				>
					<ButtonChoise 
						btnName="choise"
						href="#from"
						text="Продать аккаунт"
					/>
				</Header>
				<Decor blockClass="hs-form">
					<Cross figure="cross-hs-form"/>
					<Circle figure="circle-hs-form"/>
					<Triangle figure="triangle-hs-form"/>
					<Square figure="square-hs-form"/>
				</Decor>
				<Form submitHandler={this.submitHearthstone} id="form">
					<img src="images/pics/hs/hs-item1.png" alt="" className="hs-item1"/>
					<img src="images/pics/hs/hs-item2.png" alt="" className="hs-item2"/>
					<img src="images/pics/hs/hs-item3.png" alt="" className="hs-item3"/>
					<TextInput 
						title="Сколько на Вашем аккаунте легендарных карт?"
						placeholder="Например: 10 "
						name="numberLegendCard"
						required
					/>
					<TextInput 
						title="Сколько на Вашем аккаунте золотых карт?"
						placeholder="Например: 10 "
						name="numberGoldenCard"
						required
					/>
					<Slider 
						title="Укажите количество золота на Вашем аккаунте"
						name="numberGolds"
						max="300000"
						min="1000"
						step="100"
					/>
					<Slider 
						title="Укажите количество пыли на Вашем аккаунте"
						name="numberDust"
						max="300000"
						min="1000"
						step="100"
					/>
					<TextInput
						title="Укажите ссылку на Hsreplay"
						placeholder="Например: https://hsreplay.net/example/909019032"
						name="hsReplayLink"
						required
					>
						<SocialSubtitle text="https://hsreplay.net/"/>
					</TextInput>
					<Slider 
						title="Укажите цену за которую вы хотите продать свой аккаунт"
						name="price"
						max="300000"
						min="100"
						step="100"
					/>
					<TextInput 
						title="Укажите контактную информацию"
						placeholder="Например: xxxxxxx@gmail.com"
						name="contacts"
						required
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