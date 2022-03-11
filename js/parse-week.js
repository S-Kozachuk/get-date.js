// Массив для конвертации номера дня недели в название (понедельни - воскресенье)
const daysName = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// Массив для конвертации номера месяца в его название (январь - декабрь)
const monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


function getUserTime(t) {
	let Y = t.getFullYear();
	let M = t.getMonth();
	let D = t.getDate();
	let z = daysName[t.getDay()];
	let h = t.getHours();
	let m = t.getMinutes();
	let d = monthName[M];
	console.log(Y, M, D, z, h, m, d);
	return `${h}:${m} | ${D}.${M+1}.${Y} | ${z} | ${d} | неделя`
}

console.log(getUserTime(new Date('2022, 5, 31')));