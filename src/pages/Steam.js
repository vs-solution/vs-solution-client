import React from 'react';
import ButtonChoise from '../components/buttons/ButtonChoise';
import ButtonSubmit from '../components/buttons/ButtonSubmit';
import ButtonUpload from '../components/buttons/ButtonUpload';
import Circle from '../components/Decor/Circle';
import Cross from '../components/Decor/Cross';
import Decor from '../components/Decor/Decor';
import Square from '../components/Decor/Square';
import Triangle from '../components/Decor/Triangle';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Form/components/Slider/Slider';
import SocialSubtitle from '../components/Form/components/TextInput/SocialSubtitle';
import TextInput from '../components/Form/components/TextInput/TextInput';
import Upload from '../components/Form/components/Upload/Upload';
import Form from '../components/Form/Form';
import Header from '../components/header/Header';
import { submitData } from '../hooks/submit.hook';

export default class Steam extends React.Component {
	constructor(props){
		super(props)

		this.submitSteam = this.submitSteam.bind(this);
	}
	
	async submitSteam(event) {
		const data = {
			itemName: event.target[0].value,
			itemPrice: event.target[1].value,
			dollar: event.target[2].value,
			screenshot: event.target[3].value,
			contacts: event.target[4].value
		}
		event.preventDefault();
		submitData('/sell/account/steam', data);
	}
	render() {
		return(
			<div>
				<Header 
					page="steam"
					offer="Продай вещи из Steam	по выгодной стоимости"
					img="images/hero-steam.png"
					blockClass="steam"
				>
					<ButtonChoise 
						btnName="choise"
						href="#form"
						text="Продать вещи"
					/>
				</Header>
				<Decor blockClass="steam-form">
					<Circle figure="circle-steam-form"/>
					<Cross figure="cross-steam-form"/>
					<Square figure="square-steam-form"/>
					<Triangle figure="triangle-steam-form"/>
				</Decor>
				<Form submitHandler={this.submitSteam} id="form">
					<img src="images/pics/steam/steam-item1.png" alt="" className="steam-item1"/>
					<img src="images/pics/steam/steam-item2.png" alt="" className="steam-item2"/>
					<img src="images/pics/steam/steam-item3.png" alt="" className="steam-item3"/>
					<img src="images/pics/steam/steam-item4.png" alt="" className="steam-item4"/>
					<TextInput 
						title="Напиши название предмета, указанное в торговой площадке"
						placeholder="Например: Arms of Desolation"
						name="itemName"
						required
					/>
					<TextInput 
						title="Укажите цену продаваемой вещи на торговой площадке Steam"
						placeholder="Например: $3.25"
						name="itemPrice"
						required
					/>
					<Slider 
						title="Укажите цену за которую Вы хотите продать свою вещь"
						name="dollar"
						max="2000"
						min="0.01"
						step="1"
					/>
					<Upload title="Загрузите скриншот Вашей вещи">
						<SocialSubtitle text="На СКРИНШОТЕ должна быть отображена следующая информация:Название предмета, Актуальная цена, Общее описание предмета"/>
						<ButtonUpload 
							btnName="Загрузить файл"
							name="screenshot"
							id="screenshot"
						/>
					</Upload>
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