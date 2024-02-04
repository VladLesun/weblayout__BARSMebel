import { modal } from './modal';

export const sendLead = (form) => {
	const body = document.querySelector('body');
	let data = {
		name: document.getElementById('name').value,
		tel: document.getElementById('tel').value,
	};

	const xhr = new XMLHttpRequest();
	const url =
		'https://barsexpo.bitrix24.by/rest/4700/ubhjey4f5vyelc1e/crm.lead.add.json';

	const params =
		'fields[TITLE]=Заявка с сайта bars-mebel.by' +
		'&fields[NAME]= ' +
		encodeURIComponent(data.name) +
		'&fields[PHONE][0][VALUE]= ' +
		encodeURIComponent(data.tel);

	xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// обработка успешного ответа от сервера
			body.classList.add('body-hidden');
			body.append(modal());
			form.reset();
		}
	};
	xhr.send(params);
};
