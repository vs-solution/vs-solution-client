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

export default class Hearthstone extends React.Component {
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
				<Form id="form">
					<img src="images/pics/hs/hs-item1.png" alt="" className="hs-item1"/>
					<img src="images/pics/hs/hs-item2.png" alt="" className="hs-item2"/>
					<img src="images/pics/hs/hs-item3.png" alt="" className="hs-item3"/>
					<TextInput 
						title="Сколько на Вашем аккаунте легендарных карт?"
						placegolder="Например: 10 "
						name="numberLegendCard"
					/>
					<TextInput 
						title="Сколько на Вашем аккаунте золотых карт?"
						placegolder="Например: 10 "
						name="numberGoldenCard"
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