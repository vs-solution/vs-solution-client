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
import TextArea from '../components/Form/components/TextArea/TextArea';
import SocialSubtitle from '../components/Form/components/TextInput/SocialSubtitle';
import TextInput from '../components/Form/components/TextInput/TextInput';
import Upload from '../components/Form/components/Upload/Upload';
import Form from '../components/Form/Form';
import Header from '../components/header/Header';

export default class Other extends React.Component {
	render() {
		return (
			<div>
				<Header 
					page="other"
					offer="Продай аккаунт в любой игре по выгодной стоимости" 
					img="images/hero-other.png"
					blockClass="other"
				>
					<ButtonChoise 
						btnName="choise"
						href="#form"
						text="Продать аккаунт"
					/>
				</Header>
				<Decor blockClass="other-form">
					<Circle figure="circle-other-form"/>
					<Cross figure="cross-other-form"/>
					<Square figure="square-other-form"/>
					<Triangle figure="triangle-other-form"/>
				</Decor>
				<Form action="#" id="form">
					<img src="images/pics/other/other-item1.png" alt="" className="other-item1"/>
					<img src="images/pics/other/other-item2.png" alt="" className="other-item2"/>
					<img src="images/pics/other/other-item3.png" alt="" className="other-item3"/>
					<TextInput 
						title="Укажите название игры"
						placeholder="Например: Overwatch"
						name="gameName"
					/>
					<TextArea
						title="Создайте детальное описание Вашего аккаунта:"
						placeholder="Например: наличие редких предметов и их названия и т.д."
						name="accDescription"
					>
						<SocialSubtitle text="Описание помогает нашим сотрудникам максимально быстро рассмотреть Ваше предложение"/>
					</TextArea>
					<Slider 
						title="Укажите цену за которую Вы хотите продать свой аккаунт"
						name="price"
						max="300000"
						min="100"
						step="100"
					/>
					<Upload title="Загрузите скриншот Вашего аккаунта/вещи">
						<SocialSubtitle text="Без этого шага Ваша анкета будет недействительна"/>
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