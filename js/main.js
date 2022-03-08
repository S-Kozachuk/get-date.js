// Получаю в константу кнопку (стрелку)
const scrollBtn = document.querySelector('.show__btn');
window.onscroll = () => {
	// Появление кнопки при вертикальной прокрутке вниз (более чем на 400 px)
	if(window.scrollY > 400) {
		scrollBtn.classList.remove('show__btn-hide');
	}
	// Исчезновение кнопки при вертикальной прокрутке вверх (менее 400 px)
	else if (window.scrollY < 400) {
		scrollBtn.classList.add('show__btn-hide');
	}
};

// Прокрутка вверх (по координатам) по нажатию кнопки (стрелки)
scrollBtn.onclick = () => {
	window.scrollTo(0, 0);
};
