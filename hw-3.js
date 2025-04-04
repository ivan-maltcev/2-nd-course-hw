let password = 'привет';
let userInput = prompt('Введите пароль');
if (userInput === password) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неверно!')
}

let a = 0;
if (a > 0 && a < 10) {
    alert('Верно')
} else {
    alert('Неверно')
}

let b = 10;
 if (b > 0 && b < 10) {
     alert('Верно');
 } else {
     alert('Неверно');
 }

 let c = -3;
 if (c > 0 && c < 10) {
     alert('Верно');
 } else {
     alert('Неверно');
 }

 let d = 2;
 if (d > 0 && d < 10) {
     alert('Верно');
 } else {
     alert('Неверно');
 }

 let e = 50;
 let f = 150;
 if (e > 100 || f > 100) {
     alert('Верно');
 } else {
     alert('Неверно');
 }

 let g = '2';
 let h = '3';
 alert(Number(g) + Number(h));

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