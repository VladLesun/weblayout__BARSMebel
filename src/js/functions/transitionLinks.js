export const transferLinks = (allLinks) => {
	for (let link of allLinks) {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			document
				.getElementById(link.getAttribute('data-link'))
				.scrollIntoView({ behavior: 'smooth' });
		});
	}
};
