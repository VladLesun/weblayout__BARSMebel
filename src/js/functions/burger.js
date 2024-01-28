export function setBurger(params) {
	const btn = document.querySelector(`.${params.btnClass}`);
	const menu = document.querySelector(`.${params.menuClass}`);
	const menuLinks = document.querySelectorAll(`.${params.menuLinksClass}`);

	menu.addEventListener('animationend', function () {
		if (this.classList.contains(params.hiddenClass)) {
			this.classList.remove(params.activeClass);
			this.classList.remove(params.hiddenClass);
		}
	});

	btn.addEventListener('click', function () {
		this.classList.toggle(params.activeClass);

		if (
			!menu.classList.contains(params.activeClass) &&
			!menu.classList.contains(params.hiddenClass)
		) {
			menu.classList.add(params.activeClass);
			document.body.classList.add(params.hiddenBody);
		} else {
			menu.classList.add(params.hiddenClass);
			document.body.classList.remove(params.hiddenBody);
		}
	});

	for (let link of menuLinks) {
		link.addEventListener('click', function () {
			btn.classList.remove('is-opened');
			menu.classList.remove('is-opened');
			document.body.classList.remove('body-hidden');
		});
	}
}
