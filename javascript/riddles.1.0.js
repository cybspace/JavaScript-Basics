function riddlesProgram() {
    document.getElementById('pageName').innerHTML = "Загадки";
    document.getElementById('intro').innerHTML = "У меня есть для тебя несколько загадок. Попробуй разгадать!";
    document.getElementById('output_1').innerHTML = "";
    document.getElementById('output_2').innerHTML = "";
    document.getElementById('output_3').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# id=start>Начать!</a>";

    function riddle(question, answer, alternateAnswer, alternateAnswerWriting) { // alternateAnswer для вариантов с двумя правильными ответами, alternateAnswerWriting - когда имеется другое написание ответа (например "звезды" и "здвёзды")
        var userAnswer = prompt(question);
        if (alternateAnswer === undefined) alternateAnswer = answer;
        if (alternateAnswerWriting === undefined) alternateAnswerWriting = answer;

        insertMessage("output_1", question);

        if (userAnswer.toLowerCase() == answer.toLowerCase() || userAnswer.toLowerCase() == alternateAnswer.toLowerCase() || userAnswer.toLowerCase() == alternateAnswerWriting.toLowerCase()) {
            insertMessage("result", "Правильно!");
            count++;
        }
        else {
            insertMessage("result", "Увы, неверно...");
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