/* Возвращает текущую дату и время
*/
let nowDate = new Date();
console.log(nowDate);

// Возвращет указанную дату и время
let myDate = new Date(2022, 3, 8, 16, 40);
console.log(myDate);

// Возвращает порядковый номер дня недели (0 - воскр., 1 - понед.)
let date = new Date('March 8, 2022 17:30:30');
let weekday = date.getDay();

console.log(weekday); // 2 - вторник

// Метод toLocaleDateString (без параметров) возвращает только текущую дату 
const nonG = new Date().toLocaleDateString();
console.log(nonG);


getDayInfo(date) {
	// массив с названиями дней недели
	let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
	return days[dataDays.getDay()];
}

let dataDays = new Date(2021, 4, 23) // 23 мая 2021 года
console.log(getDayInfo(date));