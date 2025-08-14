export const modal = () => {
	const modal = document.createElement('div'),
		modalOverlay = document.createElement('div'),
		modalContainer = document.createElement('div'),
		image = document.createElement('div'),
		modalTitle = document.createElement('h2'),
		modalText = document.createElement('div'),
		modalBtn = document.createElement('button');

	modal.classList.add('modal');
	modalOverlay.classList.add('modal__overlay');
	modalContainer.classList.add('modal__container');
	image.classList.add('modal__img');
	modalTitle.classList.add('modal__title');
	modalText.classList.add('modal__text');
	modalBtn.classList.add('modal__btn');

	modalTitle.textContent = 'Успешно !';
	modalText.textContent = 'С Вами свяжутся в ближайшее время.';

	modalBtn.insertAdjacentHTML(
		'beforeend',
		`
    <svg
    class="modal__svg"
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.2332 7.73333L21.2665 6.76666L14.4998 13.5334L7.73318 6.7667L6.76652 7.73336L13.5332 14.5L6.76654 21.2667L7.73321 22.2333L14.4998 15.4667L21.2665 22.2334L22.2332 21.2667L15.4665 14.5L22.2332 7.73333Z"
      fill="currentColor"
    />
  </svg>`
	);
	modalContainer.append(image, modalTitle, modalText, modalBtn);
	modalOverlay.append(modalContainer);
	modal.append(modalOverlay);

	//! Закрываем модальное окно
	modal.addEventListener('click', ({ target }) => {
		if (target.closest('.modal__svg') || target === modal) {
			modal.remove();
			document.querySelector('body').classList.remove('body-hidden');
		}
	});

	return modal;
};
