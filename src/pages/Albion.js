import React 			from 'react';
import ButtonChoise 	from '../components/buttons/ButtonChoise';
import ButtonSubmit 	from '../components/buttons/ButtonSubmit';
import ButtonUpload 	from '../components/buttons/ButtonUpload';
import Circle 			from '../components/Decor/Circle';
import Cross 			from '../components/Decor/Cross';
import Decor 			from '../components/Decor/Decor';
import Square 			from '../components/Decor/Square';
import Triangle 		from '../components/Decor/Triangle';
import Footer 			from '../components/Footer/Footer';
import Slider 			from '../components/Form/components/Slider/Slider';
import SliderSilver 	from '../components/Form/components/Slider/SliderSilver';
import TextArea 		from '../components/Form/components/TextArea/TextArea';
import SocialSubtitle 	from '../components/Form/components/TextInput/SocialSubtitle';
import TextInput 		from '../components/Form/components/TextInput/TextInput';
import Upload 			from '../components/Form/components/Upload/Upload';
import Form 			from '../components/Form/Form';
import Header 			from '../components/header/Header';
import { submitData } 	from '../hooks/submit.hook';

class Albion extends React.Component {
	constructor(props) {
		super(props)

		this.submitAlbion = this.submitAlbion.bind(this);
		this.sellSilver = this.sellSilver.bind(this);
	}
	
	async submitAlbion(event) {
		const data = {
			accountFame: event.target[0].value,
			valueProperty: event.target[1].value,
			price: event.target[2].value,
			screenshot: event.target[3].value,
			contacts: event.target[4].value
		}
		event.preventDefault();
		submitData('/sell/account/albion', data);
	}
	async sellSilver(event) {
		const data = {
			numberSilver: event.target[0].value,
			contacts: event.target[1].value
		}
		event.preventDefault();
		submitData('/sell/currency/albion', data);
	}
	render() {
		return (
			<div>
				<Header 
					page="albion"
					offer="Продай аккаунт/серебро в Albion Online по выгодной стоимости"
					img="images/hero-albion.png"
					blockClass="albion"
				>
					<ButtonChoise 
						btnName="choise"
						href="#form"
						text="Продать аккаунт"
					/>
					<ButtonChoise 
						btnName="sell"
						href="#sell-form"
						text="Продать серебро"
					/>
				</Header>
				<Decor blockClass="albion-form">
					<Square figure="square-albion-form"/>
					<Circle figure="circle-albion-form"/>
					<Triangle figure="triangle-albion-form"/>
					<Cross figure="cross-albion-form" />
				</Decor>
				<Form submitHandler={this.submitAlbion} id="form">
					<img src="images/pics/albion/albion-item1.png" alt="" className="albion-item1" />
					<img src="images/pics/albion/albion-item2.png" alt="" className="albion-item2" />
					<Slider 
						title="Укажите количество фейма на вашем аккаунте"
						name="accountFame"
						max="1000000000"
						min="50000"
						step="10000"
					>
						<SocialSubtitle text="Мы покупаем аккаунты, исключительно, от 50к фейма"/>
					</Slider>
					<TextArea 
						title="Присутствует ли на Вашем аккаунте ценное имущество (Золото|Серебро|Вещи)?"
						placeholder="Например: 1000 золота , 50000 серебра и т.д."
						name="valueProperty"
						required
					/>
					<Slider 
						title="Укажите цену за которую вы хотите продать свой аккаунт"
						name="price"
						max="300000"
						min="100"
						step="100"
					/>
					<Upload title="Загрузите скриншот вашего аккаунта">
						<SocialSubtitle text="Без этого шага Ваша анкета будет недействительна" />
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
				<Form submitHandler={this.sellSilver} id="sell-form">
					<img src="images/pics/albion/albion-item3.png" alt="" className="albion-item3" />
					<img src="images/pics/albion/albion-item4.png" alt="" className="albion-item4" />
					<SliderSilver
						title="Какое количество серебра Вы хотите продать ?" 
						name="numberSilver"
						max="1000000000"
						min="25000000"
						step="1000000"
					>
						<SocialSubtitle text="Мы покупаем серебро, исключительно, от 25.000.000 серебра, и НЕ принимаем вещи к оплате!" />
					</SliderSilver>
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
	}
};

export default Albion;