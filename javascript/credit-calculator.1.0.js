/**
 * Created by spacemonk on 07/09/2016.
 */
function creditCalculatorProgram () {
    document.getElementById('pageName').innerHTML = "Кредитный калькулятор";
    document.getElementById('intro').innerHTML = "Я помогу тебе расчитать график платежей по кредиту.";
    document.getElementById('input_1').innerHTML = "";
    document.getElementById('input_2').innerHTML = "";
    document.getElementById('input_3').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# class=inboxLink id=loanInput>Задать сумму кредита</a>/<a href=# class=inboxLink id=interestInput>Задать % ставку</a>/<a href=# class=inboxLink id=timeInput>Задать срок</a>/<a href=# class=inboxLink id=calculate>Рассчитать!</a>";

    var loan, interest, time;
    var countLoan = 0, countInterest = 0, countTime = 0;
    // Вводим сумму кредита
    var loanInput = document.getElementById('loanInput');
    loanInput.onclick = function() {
        loan = +prompt("Введите сумму кредита:");
        while (loan <= 0 || isNaN(loan)) {
            loan = +prompt("Неверное значение. \n\n1. Сумма должна быть больше нуля. \n2. Для дробной части используйте точку. \n\nПовторите ввод:");
        }
        if (countLoan == 0) {
            countLoan++;
            document.getElementById('input_1').innerHTML = "<span id=loan>Сумма кредита: <span id=loanAmount>" + loan.toFixed(2) + "</span>.</span>";
            document.getElementById('result').innerHTML = "";
        }
        else {
            document.getElementById('loanAmount').innerHTML = loan;
            document.getElementById('result').innerHTML = "";
        }
    };
    // Вводим сумму процентов
    var interestInput = document.getElementById('interestInput');
    interestInput.onclick = function() {
        interest = +prompt("Введите процентную ставку по кредиту:");
        while (interest < 0 || isNaN(interest)) {
            interest = +prompt("Неверное значение. \n\n1. Процентная ставка не может быть меньше нуля. \n2. Для дробной части используйте точку. \n3. Не указывайте знак процентов. \n\nПовторите ввод:");
        }
        if (countInterest == 0) {
            countInterest++;
            document.getElementById('input_2').innerHTML = "<span id=interest>Процентная ставка: <span id=interestAmount>" + interest.toFixed(2) + "</span>%.</span>";
            document.getElementById('result').innerHTML = "";
        }
        else {
            document.getElementById('interestAmount').innerHTML = interest;
            document.getElementById('result').innerHTML = "";
        }
    };
    // Вводим срок
    var timeInput = document.getElementById('timeInput');
    timeInput.onclick = function() {
        time = +prompt("Введите срок в месяцах:");
        while (time <= 0 || isNaN(time) || (time - time.toFixed(0) != 0)) {
            time = +prompt("Неверное значение. \n\n1. Срок должен быть больше нуля. \n2. Вводите целое число (без дробной части). \n\nПовторите ввод:");
        }
        if (countTime == 0) {
            countTime++;
            document.getElementById('input_3').innerHTML = "<span id=time>Срок кредитования: <span id=timeAmount>" + time + "</span> месяцев.</span>";
            document.getElementById('result').innerHTML = "";
        }
        else {
            document.getElementById('timeAmount').innerHTML = time;
            document.getElementById('result').innerHTML = "";
        }
    };
    // Рассчитываем график
    var calculate = document.getElementById('calculate');
    calculate.onclick = function() {
        if (isNaN(loan) || isNaN(interest) || isNaN(time)) {
            document.getElementById('result').innerHTML = "<span style=color:red;>Не заданы праметры для расчета или заданы не все параметры: сумма кредита, процентная ставка или срок. </span><br/>"
        }
        else {
            var k = interest / 100;
            var monthInterest = k/12;
            var monthPayment = loan * (monthInterest + monthInterest/(Math.pow(1 + monthInterest, time) - 1));
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
    }
}