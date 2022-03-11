// Массив для конвертации номера дня недели в название (понедельни - воскресенье)
const daysName = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// Массив для конвертации номера месяца в его название (январь - декабрь)
const monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function getUserTime(t) {
	let Y = t.getFullYear();
	let M = t.getMonth();
	let D = t.getDate();
	let W = t.getDay();
	let h = t.getHours();
	let m = t.getMinutes();
	let d = monthName[M];
	let z = daysName[W]
	console.log(Y, M, D, z, h, m, d);
	return `${h}:${m} | ${D}.${M+1}.${Y} | ${z} | ${d} | неделя`
}

console.log(getUserTime(new Date('2022, 5, 31')));

function weekId (D, W) {
	let number = 0;
	let summ = 0;
	if (W == 0) {
		W = 7;
		number ++;
	}
	W = 8 - W;
	if (W !=1) {
		D -= W;
	}
	summ = Math.ceil (D/7);
	number +=summ;
	return number;
}

console.log(weekId());