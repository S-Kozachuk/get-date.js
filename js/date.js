/* Возвращает текущую дату и время
*/
/*
let nowDate = new Date();
console.log(nowDate);
*/

// Возвращет указанную дату и время
/*
let myDate = new Date(2022, 3, 8, 16, 40);
console.log(myDate);
*/

// Возвращает порядковый номер дня недели (0 - воскр., 1 - понед.)
/*
let date = new Date('March 8, 2022 17:30:30');
let weekday = date.getDay();
console.log(weekday); // 2 - вторник
*/

// Метод toLocaleDateString (без параметров) возвращает только текущую дату 
/*
const nonG = new Date().toLocaleDateString();
console.log(nonG);
*/


function getDayInfo(date) {
	// массив с названиями дней недели
	let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
	// метод getDay возращает порядковый номер дня недели
	// полученный из переменной date, затем полученное число
	// сопоставляется со значением из массива days
	return days[date.getDay()];
}

let date = new Date(2022, 2, 8) // 8 марта 2022 года
console.log(getDayInfo(date));