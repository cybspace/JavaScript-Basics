/**
 * Created by spacemonk on 07/09/2016.
 */
function currencyExchangeProgram () {

    var usdExchRate = 65.44, eurExchRate = 73.89, rubAmmount, clickCalc = 0;

    document.getElementById('pageName').innerHTML = "Конвертер валют";
    document.getElementById('intro').innerHTML = "Я помогу пересчитать любую сумму рублей в доллары и евро.";
    document.getElementById('input_1').innerHTML = "Курс доллара: <span id=usdRub>" + usdExchRate + "</span>";
    document.getElementById('input_2').innerHTML = "Курс евро: <span id=eurRub>" + eurExchRate + "</span>";
    document.getElementById('input_3').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# class=inboxLink id=usdInput>Задать курс доллара</a>/<a href=# class=inboxLink id=eurInput>Задать курс евро</a>/<a href=# class=inboxLink id=rubInput>Задать сумму в рублях</a>";

    function numChecker (num) {
        //проверяем что num это число и оно не отрицательно
        if (isNaN(num) || num < 0) {
            return 1;
        }
        else {
            return 0;
        }
    }

    function rubCalc (rAmount, curExchRate, scale) {
        return rAmount * scale / curExchRate;
    }

    function currencyInput (name) {
        var output = +prompt("Введите значение " + name);
        while (numChecker(output) == 1) {
            output = +prompt("Неверное значение. \n\n 1. Значение должно быть больше нуля. \n 2. Для десятичной части используйте точку. \n\nПовторите ввод:");
        }
        if (name == "RUB") {
            document.getElementById(name.toLowerCase() + 'Rub').innerHTML = output.toFixed(2);
            document.getElementById(name.toLowerCase() + 'Usd').innerHTML = rubCalc(output, usdExchRate, 1).toFixed(2);
            document.getElementById(name.toLowerCase() + 'Eur').innerHTML = rubCalc(output, eurExchRate, 1).toFixed(2);
        }
        else {
            document.getElementById(name.toLowerCase() + 'Rub').innerHTML = output.toFixed(2);
        }
        return output;
    }

    document.getElementById('usdInput').onclick = function() {
        if (clickCalc == 0) {
            usdExchRate = currencyInput("USD");
        }
        else {
            usdExchRate = currencyInput("USD");
            document.getElementById('rubUsd').innerHTML =  rubCalc(rubAmmount, usdExchRate, 1).toFixed(2);
        }
    }

    document.getElementById('eurInput').onclick = function() {
        if (clickCalc == 0) {
            eurExchRate = currencyInput("EUR");
        }
        else {
            eurExchRate = currencyInput("EUR");
            document.getElementById('rubEur').innerHTML =  rubCalc(rubAmmount, eurExchRate, 1).toFixed(2);

        }
    }

    document.getElementById('rubInput').onclick = function() {
        if (clickCalc == 0) {
            document.getElementById('result').innerHTML = "<span id=rubRub></span> рублей равняются <span id=rubUsd></span> долларов или <span id=rubEur></span> евро."
            rubAmmount = currencyInput("RUB");
            clickCalc++;
        }
        else {
            rubAmmount = currencyInput("RUB");
        }
    }
}