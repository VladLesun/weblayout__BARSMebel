import 'lazysizes';
import { setBurger } from './functions/burger';
import { sendLead } from './functions/sendLead';
import { swiper } from './functions/swiper';
import { transferLinks } from './functions/transitionLinks';
import { validationForm } from './functions/validationForm';

function init() {
	document.querySelector('body').addEventListener('touchstart', () => {});
	const links = document.querySelectorAll('.transfer-link');
	const allSwipers = document.querySelectorAll('.product__swiper');
	const form = document.querySelector('.form');
	const validate = validationForm(form);

	transferLinks(links);
	setBurger({
		// здесь мы вызываем функцию и передаем в нее классы наших элементов
		btnClass: 'header__burger', // класс бургера
		menuClass: 'header__menu', // класс меню
		menuLinksClass: 'menu__link', // класс ссылок
		activeClass: 'is-opened', // класс открытого состояния
		hiddenClass: 'is-closed', // класс закрывающегося состояния (удаляется сразу после закрытия)
		hiddenBody: 'body-hidden', // класс для остановки свайпа body
	});
	swiper(allSwipers);

	form.addEventListener('submit', e => {
		e.preventDefault();

		if (!validate.isValid) {
			return;
		}

		sendLead(form);
	});
}

init();
