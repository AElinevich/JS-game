// определяем рандомное число  (макс не войдет в диапазон)

// ловим мусор вместо цифр
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function globalFunc() {
    let min = Math.ceil(0);
    let max = Math.floor(101);
    let target = Math.floor(Math.random() * (max - min)) + min;
    console.log(target);


    function randomNumber(target) {
        let question = prompt('Угадай число от 1 до 100', '');

   if(question === null) {return console.log(false)}
   else if(!isNumber(question)) {return randomNumber()}
   else {
        question = +question;
        if(question > target) {
            alert('Загаданное число меньше', '');
            randomNumber();
        }
        else if(question < target) {
            alert('Загаданное число больше', '');
            randomNumber();
        } else if (question === target){
            alert('Ты угадал')
        }


   }     
        
}
randomNumber(target)
}

let call = globalFunc();




 