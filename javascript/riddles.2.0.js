function riddlesProgram() {
    document.getElementById('pageName').innerHTML = "Загадки";
    document.getElementById('intro').innerHTML = "У меня есть для тебя несколько загадок. Попробуй разгадать!";
    document.getElementById('output_1').innerHTML = "";
    document.getElementById('output_2').innerHTML = "";
    document.getElementById('output_3').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# id=checkAnswers>Проверить!</a><br/><a href=# id=start>Начать!</a>";
    document.getElementById('checkAnswers').style.display = 'none';

    function riddle(id, question) {
        var target = "output_" + id;
        insertMessage(target, question);
        updateMessage(target, "<br/><input type=text id=userAnswer_" + id + ">");
    }

    function checkAnswer (userAnswer, answer, alternateAnswer, alternateAnswerWriting) { // alternateAnswer для вариантов с двумя правильными ответами, alternateAnswerWriting - когда имеется другое написание ответа (например "звезды" и "здвёзды")
        if (alternateAnswer === undefined) alternateAnswer = answer;
        if (alternateAnswerWriting === undefined) alternateAnswerWriting = answer;
        if (userAnswer.toLowerCase() == answer.toLowerCase() || userAnswer.toLowerCase() == alternateAnswer.toLowerCase() || userAnswer.toLowerCase() == alternateAnswerWriting.toLowerCase()) {
            return 1;
        }
        else {
            return 0;
        }
    }


    document.getElementById('start').onclick = function () {
        insertMessage("result");
        riddle(1, "Ок! Начнем с простого. <br/><br/>Кто утром ходит на четырех ногах, днем ходит на двух ногах, а вечером - на трех?");
        riddle(2, "Следующая загадка: <br/><br/>Мы на небе все время, <br/>но не видны порой. <br/>Чем больше света вокруг, <br/>тем меньше виден наш строй. <br/><br/>Кто мы?");
        riddle(3, "Последняя загадка: <br/><br/>Загляни внутрь, чтобы найти ответ! Я ключ к твоему выживанию! <br/><br/>Ничего не напоминает?");
        insertMessage("start", "Начать заново!");
        document.getElementById('checkAnswers').style.display = 'block';
    };


    document.getElementById('checkAnswers').onclick = function () {
        var message;
        var count = 0;
        var userAnswer = getStringValue("userAnswer_1");
        count += checkAnswer(userAnswer, "человек");
        userAnswer = getStringValue("userAnswer_2");
        count += checkAnswer(userAnswer, "звезды", "созвездия", "звёзды");
        userAnswer = getStringValue("userAnswer_3");
        count += checkAnswer(userAnswer, "орган", "сердце");
        message = "<br/>Вы угадали " + count + " из 3-х загадок.";
        for (var i = 1; i <= 3; i++) {
            insertMessage("output_" + i);
        }
        if (count == 3) {
            insertMessage("output_1", "Поздравляю!" + message);
        }
        else if (count == 0) {
            insertMessage("output_1", "Увы..." + message);
        }
        else {
            insertMessage("output_1", "Неплохо!" + message);
        }
        document.getElementById('checkAnswers').style.display = 'none';
    };
}