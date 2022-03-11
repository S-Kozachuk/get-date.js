function getUserTime(t) {
	let Y = t.getFullYear();
	let M = t.getMonth();
	let D = addLeadingZero(t.getDate());
	let z = daysName[t.getDay()];
	// Извлекаем время в формате часов
	let h = addLeadingZero(t.getHours());
	// Извлекаем время в формате минут
	let m = addLeadingZero(t.getMinutes());
	// Извлекаем название месяца (Январь - Февраль)
	let d = monthName[M];
	let w = weekId(t.getDate());
	console.log(Y, M, D, z, h, m, d, w);
	// Возврат отформатированных данных (значений) в функцию с помощью оператора return
	return `${h}:${m} | ${D}.${M+1}.${Y} | ${z} | ${d} | ${w} неделя`
}

console.log(getUserTime(new Date('2022, 5, 31')));