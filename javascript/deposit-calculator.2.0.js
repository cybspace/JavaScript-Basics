/**
 * Created by spacemonk on 07/09/2016.
 */
"use strict"
function depositCalculatorProgram () {
    document.getElementById('pageName').innerHTML = "Депозитный калькулятор";
    document.getElementById('intro').innerHTML = "Я помогу рассчитать твой доход от депозитного вклада.";
    document.getElementById('output_1').innerHTML = "Сумма депозита, в руб.: <input type=text id=depoInput />";
    document.getElementById('output_2').innerHTML = "Процентная ставка, в %: <input type=text id=interestInput />";
    document.getElementById('output_3').innerHTML = "Срок, в годах: <input type=text id=timeInput />";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# class=inboxLink id=calcMonthly>Рассчитать по месяцам!</a>/<a href=# class=inboxLink id=calcYearly>Рассчитать по годам!</a>";

    var depoCalc = function (deposit, interest, time, timeMultiplier) {
        if (timeMultiplier === undefined) timeMultiplier = 1;
        insertMessage("result");
        var k, income, periodIncome, timeString, message;
        income = deposit;
        k = interest / 100;
        timeString = timeMultiplier == 1 ? "года" : "месяца";

        for (var i = 1; i <= ( time * timeMultiplier ); i++) {
            periodIncome = income * k / timeMultiplier;
            income = income + periodIncome;
            message = "Сумма депозита после " + i + " " + timeString + ": " + income.toFixed(2) + ", доход от процента: " + periodIncome.toFixed(2) + ".<br/>";
            updateMessage("result", message);
            if (i == time) {
                income -= deposit;
                message = "<br/>Итоговый доход составил: " + income.toFixed(2) + ".<br/>";
                updateMessage("result", message);
            }
        }
    };

    var calculate = function (timeMultiplier) {
        var deposit, interest, time;
        deposit = getValue("depoInput");
        interest = getValue("interestInput");
        time = getValue("timeInput");
        var message;

        if (inputCheck(deposit) == false) {
            message = "<span style=color:red;>Сумма депозита не задана или задана неверно: значение должно быть больше нуля, для десятичной части используйте точку.</span><br/>";
            insertMessage("result", message);
        }
        else if (inputCheck(interest) == false) {
            message = "<span style=color:red;>Поцентная ставка не задана или задана неверно: значение должно быть больше нуля, для десятичной части используйте точку.</span><br/>";
            insertMessage("result", message);
        }
        else if (inputCheck(time, true) == false) {
            message = "<span style=color:red;>Срок не задана или задан неверно: значение должно быть больше нуля и должно быть целым.</span><br/>";
            insertMessage("result", message);
        }
        else {
            depoCalc(deposit, interest, time, timeMultiplier);
        }
    };

    document.getElementById('calcMonthly').onclick = function () {
        insertMessage("result");
        calculate(12);
    };
    document.getElementById('calcYearly').onclick = function () {
        insertMessage("result");
        calculate(1);
    };

}