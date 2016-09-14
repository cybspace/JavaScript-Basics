/**
 * Created by spacemonk on 07/09/2016.
 */
function creditCalculatorProgram () {
    document.getElementById('pageName').innerHTML = "Кредитный калькулятор";
    document.getElementById('intro').innerHTML = "Я помогу расчитать график платежей по кредиту.";
    document.getElementById('output_1').innerHTML = "";
    document.getElementById('output_2').innerHTML = "";
    document.getElementById('output_3').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# class=inboxLink id=loanInput>Задать сумму кредита</a>/<a href=# class=inboxLink id=interestInput>Задать % ставку</a>/<a href=# class=inboxLink id=timeInput>Задать срок</a>/<a href=# class=inboxLink id=calculate>Рассчитать!</a>";

    var loan, interest, time;

    var inputCheck = function (isFull) {
        if (isFull === undefined) isFull = false;
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
    
    var creditCalc = function (loan, interest, time) {
        if (isNaN(loan) || isNaN(interest) || isNaN(time)) {
            document.getElementById('result').innerHTML = "<span style=color:red;>Не заданы праметры для расчета или заданы не все параметры: сумма кредита, процентная ставка или срок. </span><br/>"
        }
        else {
            var k = interest / 100;
            var monthInterest = k / 12;
            var monthPayment = loan * (monthInterest + monthInterest / (Math.pow(1 + monthInterest, time) - 1));
            var paymentLoan, paymentInterest, loanRest;
            loanRest = loan;

            document.getElementById('result').innerHTML = "График платежей: <br/>";

            for (var i = 1; i <= time; i++) {
                paymentInterest = loanRest * monthInterest;
                paymentLoan = monthPayment - paymentInterest;
                loanRest -= paymentLoan;
                if (loanRest < 0) {
                    monthPayment += loanRest;
                    paymentLoan += loanRest;
                    loanRest -= loanRest;
                }
                document.getElementById('result').innerHTML += "Месяц: " + i + " Платеж: " + monthPayment.toFixed(2) + " Сумма ОД: " + paymentLoan.toFixed(2) + " Сумма %: " + paymentInterest.toFixed(2) + " Остаток: " + loanRest.toFixed(2) + "</br>";
            }
            document.getElementById('result').innerHTML += "<br/>Итого переплата по кредиту: " + ( monthPayment * time - loan ).toFixed(2) + ".";
        }
    };

    var outputBuilder = function(message, name, number) {
        if (message === undefined || name === undefined || number === undefined) {
            return "Error";
        }
        else {
            document.getElementById('output_' + number).innerHTML = "<span id=" + name + ">" + message + ": <span id=" + name + "Amount></span>.</span>";
            document.getElementById('result').innerHTML = "";
        }
    };

    document.getElementById('loanInput').onclick = function () {
        outputBuilder("Сумма кредита, в руб.", "loan", 1);
        loan = inputCheck();
        document.getElementById('loanAmount').innerHTML = loan;
    };

    document.getElementById('interestInput').onclick = function () {
        outputBuilder("Процентная ставка, в %", "interest", 2);
        interest = inputCheck();
        document.getElementById('interestAmount').innerHTML = interest;
    };

    document.getElementById('timeInput').onclick = function () {
        outputBuilder("Срок кредита, в годах", "time", 3);
        time = inputCheck();
        document.getElementById('timeAmount').innerHTML = time;
    };

    document.getElementById('calculate').onclick = function () {
        creditCalc(loan, interest, time);
    }
    
}