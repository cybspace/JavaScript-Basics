function riddlesProgram() {
    document.getElementById('pageName').innerHTML = "Загадки";
    document.getElementById('intro').innerHTML = "У меня есть для тебя несколько загадок. Попробуй разгадать!";
    document.getElementById('output_1').innerHTML = "";
    document.getElementById('output_2').innerHTML = "";
    document.getElementById('output_3').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# id=start>Проверить!</a>";

    function riddle(id, question) {
        if (alternateAnswer === undefined) alternateAnswer = answer;
        if (alternateAnswerWriting === undefined) alternateAnswerWriting = answer;

        var target = "output_" + id;
        insertMessage(target, question);
        updateMessage(target, "<br/><input type=text id=userAnswer_" + id + ">");
    }

    function checkAnswer (userAnswer, answer, alternateAnswer, alternateAnswerWriting) { // alternateAnswer для вариантов с двумя правильными ответами, alternateAnswerWriting - когда имеется другое написание ответа (например "звезды" и "здвёзды")
            if (userAnswer.toLowerCase() == answer.toLowerCase() || userAnswer.toLowerCase() == alternateAnswer.toLowerCase() || userAnswer.toLowerCase() == alternateAnswerWriting.toLowerCase()) {
                return 1;
            }
            else {
                return 0;
            }
    }


    var counter = 0;
    var i = 0;

    while ( i < 1 ) {
        document.getElementById('start').onclick = function () {
            riddle(1, "Ок! Начнем с простого. <br/><br/>Кто утром ходит на четырех ногах, днем ходит на двух ногах, а вечером - на трех?");
            i++;
        }
    }

    i = 0;
    while ( i < 0 ) {
        document.getElementById('answer').onclick = function () {
            counter += checkAnswer("человек");
            riddle(2, "Следующая загадка: <br/><br/>Мы на небе все время, <br/>но не видны порой. <br/>Чем больше света вокруг, <br/>тем меньше виден наш строй. <br/><br/>Кто мы?");
        }
    }

    i = 0;
    while ( i < 0 ) {
        document.getElementById('answer').onclick = function () {
            counter += checkAnswer("звезды", "созвездия", "звёзды");
            riddle(3, "Последняя загадка: <br/><br/>Загляни внутрь, чтобы найти ответ! Я ключ к твоему выживанию! <br/><br/>Ничего не напоминает?");
        }
    }

    i = 0;
    while ( i < 0 ) {
        document.getElementById('answer').onclick = function () {
            var message;
            counter += checkAnswer("орган", "сердце");
            insertMessage("output_1");
            insertMessage("output_2");
            insertMessage("output_3");
            insertMessage("result");
            insertMessage("programLinks", "<a href=# id=start>Заново!</a>");
            if (counter == 3) {
                message = "Поздравляю!<br/>";
            }
            else if (counter == 2) {
                message = "Неплохо!<br/>";
            }
            else if (counter == 1) {
                message = "Могло быть и лучше!<br/>";
            }
            else {
                message = "Увы...<br/>"
            }
            var result = message + "Вы угадали " + counter + " из 3-х загадок!";
            insertMessage("output_1", result);
        }
    }



    /*var a = document.getElementById('start');
    a.onclick = function () {

        var count = 0;

        function riddle(question, answer, alternateAnswer, alternateAnswerWriting) { // alternateAnswer для вариантов с двумя правильными ответами, alternateAnswerWriting - когда имеется другое написание ответа (например "звезды" и "здвёзды")
            var userAnswer = prompt(question);
            if (alternateAnswer === undefined) alternateAnswer = answer;
            if (alternateAnswerWriting === undefined) alternateAnswerWriting = answer;

            if (userAnswer.toLowerCase() == answer.toLowerCase() || userAnswer.toLowerCase() == alternateAnswer.toLowerCase() || userAnswer.toLowerCase() == alternateAnswerWriting.toLowerCase()) {
                alert("Правильно!");
                count++;
            }
            else {
                alert("Увы, неверно...");
            }
        }

        riddle("Ок! Начнем с простого. \n\nКто утром ходит на четырех ногах, днем ходит на двух ногах, а вечером - на трех?", "человек");
        riddle("А теперь посложнее: \n\nМы на небе все время, \nно не видны порой. \nЧем больше света вокруг, \nтем меньше виден наш строй. \n\nКто мы?", "звезды", "созвездия", "звёзды");
        riddle("Последняя загадка: \n\nЗагляни внутрь, чтобы найти ответ! Я ключ к твоему выживанию! \n\nНичего не напоминает?", "орган", "сердце");

        document.getElementById('result').innerHTML = "Вы угадали " + count + " из 3-х загадок! <br/><br/>Правильные ответы 1: человек, 2: звезды или созвездия, 3: орган или сердце.";

        };*/
}