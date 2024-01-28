import { validationForm } from './validationForm';

export function sendForm(form) {
	const validate = validationForm(form);

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		if (!validate.isValid) {
			return;
		}
	});
}
