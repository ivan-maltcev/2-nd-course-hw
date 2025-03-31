let monthNumber = Number(prompt('Введите номер месяца (от 1 до 12):'));
if (isNaN(monthNumber)) {
    alert('Это не число!');
} else if (monthNumber < 1 || monthNumber > 12) {
    alert('Некорректный номер месяца! Введите число от 1 до 12.');
} else {
    let season;
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            season = 'Зима'
            break;
        case 3:
        case 4:
        case 5:
            season = 'Весна'
            break;
        case 6:
        case 7:
        case 8:
            season = 'Лето'
            break;
        case 9:
        case 10:
        case 11:
            season = 'Осень'
            break;
    }
    alert(`Месяц ${monthNumber} - это ${season}.`);
}