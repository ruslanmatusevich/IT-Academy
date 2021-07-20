let surname = prompt('Ваша фамилия?', '');
let name = prompt('Ваше имя?', '');
let patronymic = prompt('Ваше отчество?', '');
let fullName = surname + ' ' + name + ' ' + patronymic;
let age = +prompt('Сколько Вам полных лет?', '');
let day = age * 365;
let future = age + 5;
let gender = confirm('Ваш пол мужской?', '');
let pension;

if (gender) {
    gender = 'мужской';
}
else {
    gender = 'женский';
}

if ((age >= 60) && (gender == 'мужской') || (age >= 55) && (gender == 'женский')) {
    pension = 'да';
}
else {
    pension = 'нет';
}

fullName = 'ваше ФИО: ' + fullName;
age = 'ваш возраст в годах: ' + age;
day = 'ваш возраст в днях: ' + day;
future = 'через 5 лет вам будет: ' + future;
gender = 'ваш пол: ' + gender;
pension = 'вы на пенсии: ' + pension;

alert(`${fullName}
${age}
${day}
${future}
${gender}
${pension}`);