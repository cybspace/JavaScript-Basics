function riddlesProgram() {
    document.getElementById('pageName').innerHTML = "Загадки";
    document.getElementById('intro').innerHTML = "У меня есть для тебя несколько загадок. Попробуй разгадать!";
    document.getElementById('input_1').innerHTML = "";
    document.getElementById('input_2').innerHTML = "";
    document.getElementById('input_3').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# id=start>Начать!</a>";

    var a = document.getElementById('start');
    a.onclick = function () {

        var count = 0;
        var riddle = prompt("Ок! Начнем с простого. \n\nКто утром ходит на четырех ногах, днем ходит на двух ногах, а вечером - на трех?");
        if (riddle.toLowerCase() == "человек") {
            count++;
            alert("Ну, это было просто! Наверняка ты уже слышал эту загадку. \n\nЖми ОК и продолжим...");

        } else {
            alert("Нет! Ответ неверный! \n\nЖми ОК и продолжим...");
        }

        riddle = prompt("А теперь посложнее: \n\nМы на небе все время, \nно не видны порой. \nЧем больше света вокруг, \nем меньше виден наш строй. \n\nКто мы?");
            if (riddle.toLowerCase() == "звезды" || riddle.toLowerCase() == "звёзды" || riddle.toLowerCase() == "созвездия") {
                count++;
                if (count == 2) {
                    alert("Огого! Да у нас тут знаток! Следующая загадка будет сложнее! \n\nНажимай Ок и мы продолжим!");
                } else {
                    alert("Правильно! \nСтранно, что ты не решил первую загадку! \n\nЖми ОК и продолжим!");
                }
            }
            else {
                if (count == 1) {
                    alert("Неверно! А так все хорошо начиналось! \n\nЖми ОК и продолжим...");
                } else {
                    alert("Правильно! \nАхахах... нет... шучу! Ты не угадал! Опять! \nМожет тебе просто не повезло, но я думаю - это закономерность. \nЕсли нажмешь ОК - будет еще загадка!");
                }
            }

            riddle = prompt("Последняя загадка: \nЗагляни внутрь, чтобы найти ответ! Я ключ к товему выживанию! \n\nНичего не напоминает?");
            if (riddle.toLowerCase() == "орган" || riddle.toLowerCase() == "сердце") {
                count++;
                if (count == 3) {
                    var comment = "Ты МАСТЕР! " + count + " из 3-х! Это мощняк!";
                } else if (count == 2) {
                    var comment = "Правильно! Ты угадал " + count + " из 3-х загадок! <br/>Правильные ответы 1: человек, 2: звезды или созвездия, 3: орган или сердце.";
                }
                else {
                    var comment = "НЕ МОЖЕТ БЫТЬ! Скажи, Google помог? А? Google? Так или иначе, ты угадал! <br/>Правильные ответы 1: человек, 2: звезды или созвездия, 3: орган или сердце.";
                }
            }
            else {

                if (count == 2) {
                    var comment = "К сожалению ты не угадал! Но " + count + " из 3-х загадок тоже хорошо! <br/>Ответ на последнюю загадку: орган или сердце.";
                } else if (count == 1) {
                    var comment = "Неверно. Всего вы угадали " + count + " из 3-х загадок. <br/>Правильные ответы 1: человек, 2: звезды или созвездия, 3: орган или сердце.";
                }
                else {
                    var comment = "Неа! А теперь загадка которая будет точно тебе по зубам: <br/>Кто не угадал ни одной загадки? Ладно, не парься! <br/>Правильные ответы 1: человек, 2: звезды или созвездия, 3: орган или сердце, 4: я.";
                }
            }

            document.getElementById('result').innerHTML = comment;

            return false;
        };
}