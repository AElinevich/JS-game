// определяем рандомное число  (макс не войдет в диапазон)
let min = Math.ceil(0);
let max = Math.floor(101);
let target = Math.floor(Math.random() * (max - min)) + min;
console.log(target);

// ловим мусор вместо цифр
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function randomNumber() {
    let question = prompt('Угадай число от 1 до 100', '');
    
    if (question === target.toString()) {
        alert ('Ты угадал');
}
    if(question === null) {
        alert('Игра окончена');     
    } else {
        if (question > target) {
            alert('Загаданное число меньше', '');
            randomNumber();

    }   if(question < target) {
            alert('Загаданное число больше', '')
            randomNumber();

    }   if (!isNumber(question)) {
            alert('Введи число', '')
            randomNumber();
    }
}
}
let two = randomNumber(target);

 