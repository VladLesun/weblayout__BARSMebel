import Inputmask from 'inputmask/lib/inputmask.js';
import JustValidate from 'just-validate';

export function validationForm(form) {
	const inputTel = document.getElementById('tel');
	const im = new Inputmask('+375(99)999-99-99');

	im.mask(inputTel);

	const validate = new JustValidate(form, {
		errorLabelStyle: {
			color: '#f00',
		},
		errorsContainer: document.querySelector('.contacts__error'),
		focusInvalidField: true,
	});

	validate
		.addField('#name', [
			{
				rule: 'required',
				errorMessage: 'Введите Ваше имя',
			},
			{
				rule: 'minLength',
				value: 3,
				errorMessage: 'Минимальное кол-во символов 3',
			},
			{
				rule: 'maxLength',
				value: 20,
				errorMessage: 'Максимальное кол-во символов 20',
			},
			{
				rule: 'customRegexp',
				value: /^[а-я]+$/i,
				errorMessage: 'Введите ваше имя корректно',
			},
		])
		.addField('#tel', [
			{
				rule: 'required',
				errorMessage: 'Введите Ваш моб. телефон',
			},
			{
				validator: () => {
					const phone = inputTel.inputmask.unmaskedvalue();
					return Boolean(Number(phone) && phone.length === 9);
				},
				errorMessage: 'Здесь должно быть 9 символов без +375',
			},
		]);

	return validate;
}
