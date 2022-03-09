/* Возвращает текущую дату и время 
/*
Объект Date это момент (точка) времени. Содержит
число миллисекунд, прошедших с 1 января 1970 г. 
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

/*
function getDayInfo(date) {
	// массив с названиями дней недели
	let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
	// метод getDay возвращает порядковый номер дня недели
	// полученный из переменной date, затем полученное число
	// сопоставляется со значением из массива days
	return days[date.getDay()];
}

let date = new Date(2022, 2, 8) // 8 марта 2022 года
console.log(getDayInfo(date));
*/

// Урок по объекту Data в JS от Александра Лущенко
// Получение локального (текщего) времени (установленного в ОС).
const d1 = new Date ();
console.log(d1);

// Время (дата), выраженное в миллисекундах
/*
Работать с временем, выраженным в мс горздо удобнее с точки зрения 
математики. Не забывать добавлять 1000 (*1000).
*/
const d2 = new Date (1646812749000);
console.log(d2); 

// Можно задать время явно
/*
Указать как аргумент для обекта Date в формате:
(год, месяц, день, часы, минуты).
Месяца начинаются с 0 (январь).
*/ 
const d3 = new Date(2021, 8, 6);
console.log(d3);
// Получение объекта времени из строки (парсинг)
const d4 = new Date('2019 Sep 6');
// ввывод типа данных: объект
console.log(typeof d4)
console.log(d4);

// Перевод строки в объект
const d5 = new Date ('Mon Sep 06 2021 00:00:00 GMT+0300');
console.log(d4);
document.querySelector('.out-1').innerHTML = d4;

