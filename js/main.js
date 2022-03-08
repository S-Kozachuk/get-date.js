const scrollBtn = document.querySelector('.show__btn');
window.onscroll = () => {
	if(window.scrollY > 400) {
		scrollBtn.classList.remove('show__btn-hide');
	}
	else if (window.scrollY < 400) {
		scrollBtn.classList.add('show__btn-hide');
	}
};

scrollBtn.onclick = () => {
	window.scrollTo(0, 0);
};
