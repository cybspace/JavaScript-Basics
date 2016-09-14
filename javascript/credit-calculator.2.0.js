/**
 * Created by spacemonk on 07/09/2016.
 */
function creditCalculatorProgram () {
    document.getElementById('pageName').innerHTML = "Кредитный калькулятор";
    document.getElementById('intro').innerHTML = "Я помогу расчитать график платежей по кредиту.";
    document.getElementById('output_1').innerHTML = "Сумма кредита, в руб.: <input type=text id=loanInput />";
    document.getElementById('output_2').innerHTML = "Процентная ставка, в %: <input type=text id=interestInput />";
    document.getElementById('output_3').innerHTML = "Срок, в годах: <input type=text id=timeInput />";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# class=inboxLink id=calculate>Рассчитать!</a>";

    var loan, interest, time;

   var inputCheck = function (value, isFull) {
       if (isFull === undefined) isFull = false;
       if (isFull == true && (isNaN(value) || value <= 0 || (value - value.toFixed(0)) !== 0)) return false;
       else if (isFull == false && (isNaN(value) || value <= 0)) return isFull;
       else return true;
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

    document.getElementById('calculate').onclick = function () {
        loan = parseFloat(document.getElementById('loanInput').value);
        interest = parseFloat(document.getElementById('interestInput').value);
        time = parseFloat(document.getElementById('timeInput').value);
        document.getElementById('result').innerHTML = "";

        if (inputCheck(loan) == false) {
            document.getElementById('result').innerHTML += "<span style=color:red;>Сумма кредита не задана или задана неверно: значение должно быть больше нуля, для десятичной части используйте точку.</span><br/>"
        }
        else if (inputCheck(interest) == false) {
            document.getElementById('result').innerHTML += "<span style=color:red;>Поцентная ставка не задана или задана неверно: значение должно быть больше нуля, для десятичной части используйте точку.</span><br/>"
        }
        else if (inputCheck(time, true) == false) {
            document.getElementById('result').innerHTML += "<span style=color:red;>Срок не задана или задан неверно: значение должно быть больше нуля и должно быть целым.</span><br/>"
        }
        else {
            creditCalc(loan, interest, time);
        }
    }
    
}