/**
 * Created by spacemonk on 07/09/2016.
 */
function guessNumberProgram () {
    document.getElementById('pageName').innerHTML = "Угадай число";
    document.getElementById('intro').innerHTML = "Я загадал число от 0 до 100. Попробуй его угадать за 5 попыток!";
    document.getElementById('output_1').innerHTML = "";
    document.getElementById('output_2').innerHTML = "";
    document.getElementById('output_3').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# id=guessNumber>Начать!</a>";

    var guessNumber = document.getElementById("guessNumber").onclick = function () {

        // Игра "Угадай число". Компьютер загадывает число от 0 до 100. Пользователь пытается его угадать.
        // Если число больше или меньше угаданного - компьютер сообщает лю этом.
        // Также подсчитываем число попыток.

        var number = (Math.random() * 100).toFixed(0); //Math.random() выдет рандомное число от 0 до 1

        var guess = +prompt("Введи число:");
        //если введено число за границами 0..100
        while (guess < 0 || guess > 100) {
            guess = +prompt("Я же сказал, от 0 до 100! Эту попытку считать не буду!");
        }

        var count = 1; //считаем число попыток

        while (guess != number && count < 5) {

            if (guess > 100 || guess < 0) {
                guess = +prompt("Я же говорю, от 0 до 100! Ты впустую тратишь попытки! \n Осталось попыток: " + (5 - count) + ".");
            }
            else {
                if (guess < number) {
                    if (number - guess <= 10) {
                        guess = +prompt("Совсем близко, но мое число больше! \n Осталось попыток: " + (5 - count) + ".");
                    }
                    else {
                        guess = +prompt("Мое число больше!  \n Осталось попыток: " + (5 - count) + ".");
                    }
                }
                else {
                    if (guess - number <= 10) {
                        guess = +prompt("Совсем близко, но мое число меньше! \n Осталось попыток: " + (5 - count) + ".");
                    }
                    else {
                        guess = +prompt("Мое число меньше! \n Осталось попыток: " + (5 - count) + ".");
                    }
                }
            }

            count++;
        }

        var comment;
        if (guess == number) {
            comment = "Правильно! Количество попыток: " + count + ".";
        }
        else {
            comment = "Попытки кончились! Еще разок?";
        }

        document.getElementById('result').innerHTML = comment;
        //If you don't want the link to actually
        // redirect the browser to another page,
        // "google.com" in our example here, then
        // return false at the end of this block.
        // Note that this also prevents event bubbling,
        // which is probably what we want here, but won't
        // always be the case.
        return false;
    }
}