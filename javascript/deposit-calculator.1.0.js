/**
 * Created by spacemonk on 07/09/2016.
 */
function depositCalculatorProgram () {
    document.getElementById('pageName').innerHTML = "Депозитный калькулятор";
    document.getElementById('intro').innerHTML = "Я помогу рассчитать твой доход от депозитного вклада.";
    document.getElementById('input_1').innerHTML = "";
    document.getElementById('input_2').innerHTML = "";
    document.getElementById('input_3').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# class=inboxLink id=depositInput>Задать сумму депозита</a>/<a href=# class=inboxLink id=persentInput>Задать % ставку</a>/<a href=# class=inboxLink id=timeInput>Задать срок (в годах)</a>/<a href=# class=inboxLink id=calcMonthly>Рассчитать по месяцам!</a>/<a href=# class=inboxLink id=calcYearly>Рассчитать по годам!</a>";

    var deposit, persent, income, time;

    var inputCheck = function (isFull) {
        var number = +prompt("Введите значение:");
        if (isFull) {
            while (isNaN(number) || number <= 0 || (number - number.toFixed(0)) !== 0) {
                number = +prompt("Неверное значение! \n\n1. Значение должно быть больше нуля. \n2. Это должно быть целое число. \n\nПовторите ввод:");
            }
        }
        else {
            while (isNaN(number) || number <= 0) {
                number = +prompt("Неверное значение! \n\n1. Значение должно быть больше нуля. \n2. Для десятичной части используйте точку. \n\nПовторите ввод:");
            }
        }
        return number;
    };

    var depoCalc = function (deposit, persent, time, timeMultiplier) {
        document.getElementById('result').innerHTML = "";
        if (isNaN(deposit) || isNaN(persent) || isNaN(time)) {
            document.getElementById('result').innerHTML = "<span style=color:red;>Не заданы условия для расчета: сумма депозита, процентная ставка или срок!</span>"
        }
        var k, periodIncome, resultIncome;
        income = deposit;
        k = persent / 100;
        for (var i = 1; i <= ( time * timeMultiplier ); i++) {
            periodIncome = income * k / timeMultiplier;
            income = income + periodIncome;
            if (timeMultiplier == 1) {
                document.getElementById('result').innerHTML += "Сумма депозита за " + i + "год: " + income.toFixed(2) + ", доход от процента: " + periodIncome.toFixed(2) + ".<br/>";
                if (i == time) {
                    resultIncome = income - deposit;
                    document.getElementById('result').innerHTML += "Итоговый доход за " + time + " лет составил: " + resultIncome.toFixed(2) + ".<br/>"
                }
            }
            else {
                document.getElementById('result').innerHTML += "Сумма депозита за " + i + "месяц: " + income.toFixed(2) + ", доход от процента: " + periodIncome.toFixed(2) + ".<br/>";
                if (i == time * timeMultiplier) {
                    resultIncome = income - deposit;
                    document.getElementById('result').innerHTML += "Итоговый дохо за " + time + " месяцев составил: " + resultIncome.toFixed(2) + ".<br/>"
                }
            }
        }
    };

    document.getElementById('depositInput').onclick = function () {
        deposit = inputCheck(false);
        document.getElementById('input_1').innerHTML = "Сумма депозита: <span id=depositValue>" + deposit.toFixed(2) + "</span>";
        document.getElementById('result').innerHTML = "";
    };

    document.getElementById('persentInput').onclick = function () {
        persent = inputCheck(false);
        document.getElementById('input_2').innerHTML = "Процентная ставка: <span id=persentValue>" + persent.toFixed(2) + "</span>%";
        document.getElementById('result').innerHTML = "";
    };


    document.getElementById('timeInput').onclick = function () {
        time = inputCheck(true);
        document.getElementById('input_3').innerHTML = "Срок: <span id=timeValue>" + time + "</span>";
        document.getElementById('result').innerHTML = "";
    };

    document.getElementById('calcMonthly').onclick = function () {
        depoCalc(deposit, persent, time, 12);
    };

    document.getElementById('calcYearly').onclick = function () {
        depoCalc(deposit, persent, time, 1);
    }
}