import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function swiper(allSwipers) {
	for (let swiper of allSwipers) {
		new Swiper(swiper, {
			modules: [Navigation, Pagination],
			slidesPerView: 10,
			loop: true,
			spaceBetween: 10,
			noSwiping: true,
			keyboard: {
				enabled: true,
			},

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 30,
					noSwiping: false,
					centeredSlides: true,
				},
				581: {
					slidesPerView: 2,
					spaceBetween: 5,
					noSwiping: false,
				},
				1001: {
					slidesPerView: 3,
					spaceBetween: 10,
					centeredSlides: true,
					keyboard: {
						enabled: true,
					},
				},
			},
		});
	}
}
