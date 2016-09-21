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
    document.getElementById('programLinks').innerHTML = "<a href=# id=checkAnswer>Проверить!</a><br/><a href=# id=start>Начать!</a>";
    document.getElementById('checkAnswer').style.display = 'none';

    function checkNumber (userAnswer, number) {
        if (userAnswer !== number) {
            return 1;
        }
        else {
            return 0;
        }
    }

    var number;
    var count;

    document.getElementById('start').onclick = function () {
        number = +(Math.random() * 100).toFixed(0); //Math.random() выдет рандомное число от 0 до 1
        count = 1;
        insertMessage("output_1", "Вводи свой ответ в окно ниже:");
        insertMessage("output_2", "<input type=text id=userAnswer>");
        insertMessage("start", "Начать заново!");
        document.getElementById('checkAnswer').style.display = 'block';
    };

    document.getElementById('checkAnswer').onclick = function () {
        var userAnswer = getValue("userAnswer");
        if (inputCheck(userAnswer, true) == false || userAnswer > 100) {
            insertMessage("output_1", "Неверное значение!<br/>Число должно быть от 0 до 100 и целое!<br/>Эту попытку не засчитываю!");
        }
        else {
            if (checkNumber(userAnswer, number) == 1 && count < 5 ) {
                if (number - userAnswer <= 10 && number - userAnswer >= 0) {
                    insertMessage("output_1", "Совсем близко, но мое число больше!");
                }
                else if (userAnswer - number <= 10 && userAnswer - number >= 0) {
                    insertMessage("output_1", "Совсем близко, но мое число меньше!");
                }
                else if (number - userAnswer > 0) {
                    insertMessage("output_1", "Мое число больше!");
                }
                else {
                    insertMessage("output_1", "Мое число меньше!");
                }
                updateMessage("output_1", "<br/>Использовано попыток: " + count + ".");
                count += 1;
            }
            else if (checkNumber(userAnswer, number) == 0 && count < 5) {
                insertMessage("output_1", "Правильно! Я загадал " + number + "<br/>Использовано попыток: " + count + ".");
                insertMessage("output_2");
                document.getElementById('checkAnswer').style.display = 'none';
            }
            else {
                insertMessage("output_1", "Увы... Попытки кончились...<br/>Я загадал " + number + ".");
                insertMessage("output_2");
                document.getElementById('checkAnswer').style.display = 'none';
            }
        }
    };
}