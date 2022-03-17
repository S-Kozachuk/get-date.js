const input = document.getElementById('data');
const out = document.querySelector('.output');
const btn = document.querySelector('.btn');
let string = '';


btn.addEventListener('click', function getDayInfo () {
	let inpUPrevers = input.value;
  	let inpUP = inpUPrevers.split('.').reverse().join(',');
  	let dataIn = new Date(inpUP);

  	let ndays = dataIn.getDay();// получаем день недели
  	let mes = dataIn.getMonth();// получаем месяц
  	let yars = dataIn.getFullYear();// получаем год
  	let dayNew = dataIn.getDate();// получаем день

	let bbb = numWeeks(dayNew, ndays);
  	string = days[ndays] + ', ' + bbb + ' неделя ' + mm[mes] + ' ' + yars + ' года';
  	out.innerHTML = "Дата: " + string;
});

let days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

let mm = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря'
];

// 1-й вариант функции numWeeks, возвращающей номер недели
function numWeeks(day, numday) {
	let number = 0;
	let summ = 0;

	if (numday == 0) {
    	numday = 7;
    	number++;
	};

	numday = 8 - numday;
  
	if (numday != 1) {
	number++;
    day -= numday;
	};

	summ = Math.ceil(day / 7);
  	number += summ;
  	return number;
}


// 2-ой вариант функции для расчёта номера недели (через while, с обр. ст. каледаря)
/* 
Для тестирвания закомментировать 1-й варинат (см. 48-ст) и
раскоментировать 2-ой вариант.
*/
/*
function numWeeks(day, dayWeek) {
	let resultate = 0;
	if (dayWeek == 0) dayWeek = 7;
	while (day != 1) {
    	if (dayWeek == 1) {
		dayWeek = 8;
    	resultate++;
		}
    day--;
	dayWeek--;
	}
	if (dayWeek >= 1) resultate ++;
	return resultate;
}
*/

/* 
P.S. В файле parse-week.js находится вариант кода с
моими комментприяими, раскрывающими принцип работы прогораммы.
*/