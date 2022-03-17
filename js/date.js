const input = document.getElementById('data');
const out = document.querySelector('.out');
const btn = document.querySelector('.btn');
let string = '';


btn.addEventListener('click', () => {
	let inpUPrevers = input.value;
  	let inpUP = inpUPrevers.split('.').reverse().join(',');
  	let dataIn = new Date(inpUP);

  	let ndays = dataIn.getDay();// получаем день недели
  	let mes = dataIn.getMonth();// получаем месяц
  	let yars = dataIn.getFullYear();// получаем год
  	let dayNew = dataIn.getDate();// получаем день

	let bbb = numWeeks(dayNew, ndays);
	// Формирование результата преобразования даты, запись в переменную stroka
  	string = days[ndays] + ', ' + bbb + ' неделя ' +
    mm[mes] + ' ' + yars + ' года';
	// Вывод даты в html-элемент (блок) с классом out
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

// Функция numWeeks возвращающая номер недели в рамках месяца
//function numWeeks(day, numday) {
  // Вычисляемый номер неделя
  //let number = 0;
  //let summ = 0;
  /* 
  Проверка. Явлется ли переданный день недели Воскресеньем (0)?
  Если да, то преобразуем его в "привычный" формат, меня номер на 7.
  Если нет, то условие (if) пропускаеся.
  В объекте Date Воскресенье соответсвует 0. В привычном виде Вс соотв. 7.
  */
 /*
  if (numday == 0) {
    numday = 7;
    number++;
  }
  */
  /*
  Избавляемся от неполных недель. Преобразуем в полную.
  Например, если месяц начинается с вторника или среды.	
  Вычитаем порядковый номер дня недели из 8.
  С этого момента numday является кол-ом дней в 1-ой недели, а не днём недели как в начале функции.
  Т.е. происходит перезапись значения переменной numday.
  */
  //numday = 8 - numday;
  /*
  Проверка.
  Если день (numday) не приходится на понедельник (1) - увеличиваем номер недели (number) на 1.
  Затем из фактического кол-ва дней (day) вычитаем кол-во дней, полученное из 1-ой недели.
  */
 /*
  if (numday != 1) {
    number++;
    day -= numday;
  }
  */
  /* 
  Полученную разницу, делим (с округлением в большую сторону) на 7 (кол-во) дней в недели.
  Складываем вычисленное кол-во дней(summ) с 1-ой неделей (number).
  Вычисленный номер недели возвращаем в функцию.
  */
 /*
  summ = Math.ceil(day / 7);
  number += summ;
  return number;
}
*/

// 2-ой вариант функции для расчёта номера недели (через while, с обр. ст. каледаря)
function numWeeks(day, dayWeek) {
let resultate = 0;
// Меняем формат дней недели на привычный (Вс = 0 > Вс = 7), если день недели равен Вс(0)
if (dayWeek == 0) dayWeek = 7;
/* 
Проверка на начало недели.
Цикл запускается, если введённый день не приходится на 1-ое число (day != 1).
Т.е. цикл работает для любого дня кроме 1-ого.

Проверка на понедельник (If). 
Далее, если день недели приходится на понедельник (dayWeek == 1),
то
Почему дню недели присваивается значение 8?

Если день приходится на 1-ое число, то его значение умеьшатеся на 1 (day--).
Поверить работу условия цикла в отладчике (debugger)
*/
while (day != 1) {
    	if (dayWeek == 1) {
		dayWeek = 8;
    	resultate++;
		}
    day--;
	dayWeek--;
	}
	/*
	2-я проверка на понедельник (работает, если день (day) равен 1). 
	Если день недели больше Пн (т.е. не 0 и не 1),
	то номер недели увеличивается на 1.
	*/
	if (dayWeek >= 1) resultate ++;
	return resultate;
}

//  console.log(numWeeks(31, 1));

/*
1. Если день приходится на 1-число и совпадает с Пн(начало недели).
2. Если день приходится на 1-ое число, но не совпадает с Пн.
Выполнятестя 2-я часть кода if (dayWeek > 1)
3. Если день приходится на любое число, кроме 1 и не совпадает с Пн (day--;
dayWeek--;)

 */

