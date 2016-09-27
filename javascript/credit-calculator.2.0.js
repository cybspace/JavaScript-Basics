/**
 * Created by spacemonk on 07/09/2016.
 */
"use strict"
function creditCalculatorProgram () {
    document.getElementById('pageName').innerHTML = "Кредитный калькулятор";
    document.getElementById('intro').innerHTML = "Я помогу расчитать график платежей по кредиту.";
    document.getElementById('output_1').innerHTML = "Сумма кредита, в руб.: <input type=text id=loanInput />";
    document.getElementById('output_2').innerHTML = "Процентная ставка, в %: <input type=text id=interestInput />";
    document.getElementById('output_3').innerHTML = "Срок, в годах: <input type=text id=timeInput />";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# class=inboxLink id=calculate>Рассчитать!</a>";

    var loan, interest, time;

    var creditCalc = function (loan, interest, time) {
        if (isNaN(loan) || isNaN(interest) || isNaN(time)) {
            document.getElementById('result').innerHTML = "<span style=color:red;>Не заданы праметры для расчета или заданы не все параметры: сумма кредита, процентная ставка или срок. </span><br/>"
        }
        else {
            var k = interest / 100;
            var monthInterest = k / 12;
            var monthPayment = loan * (monthInterest + monthInterest / (Math.pow(1 + monthInterest, time) - 1));
            var paymentLoan, paymentInterest, loanRest, message;
            loanRest = loan;

            insertMessage("result", "График платежей: <br/>");

            for (var i = 1; i <= time; i++) {
                paymentInterest = loanRest * monthInterest;
                paymentLoan = monthPayment - paymentInterest;
                loanRest -= paymentLoan;
                if (loanRest < 0) {
                    monthPayment += loanRest;
                    paymentLoan += loanRest;
                    loanRest -= loanRest;
                }
                message = "Месяц: " + i + " Платеж: " + monthPayment.toFixed(2) + " Сумма ОД: " + paymentLoan.toFixed(2) + " Сумма %: " + paymentInterest.toFixed(2) + " Остаток: " + loanRest.toFixed(2) + "</br>";
                updateMessage("result", message);
            }
            message = "<br/>Итого переплата по кредиту: " + ( monthPayment * time - loan ).toFixed(2) + ".";
            updateMessage("result", message);
        }
    };

    document.getElementById('calculate').onclick = function () {
        loan = getValue("loanInput");
        interest = getValue("interestInput");
        time = getValue("timeInput");
        insertMessage("result");
        var message;

        if (inputCheck(loan) == false) {
            message = "<span style=color:red;>Сумма кредита не задана или задана неверно: значение должно быть больше нуля, для десятичной части используйте точку.</span><br/>";
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
            creditCalc(loan, interest, time);
        }
    }
    
}