/**
 * Created by spacemonk on 07/09/2016.
 */
function currencyExchangeProgram () {
    document.getElementById('pageName').innerHTML = "Конвертер валют";
    document.getElementById('intro').innerHTML = "Я помогу пересчитать любую сумму рублей в доллары и евро.";
    document.getElementById('output_1').innerHTML = "Курс доллара: <input type=text id=usdInput />";
    document.getElementById('output_2').innerHTML = "Курс евро: <input type=text id=eurInput />";
    document.getElementById('output_3').innerHTML = "Сумма в рублях: <input type=text id=rubInput />";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# class=inboxLink id=calculate>Рассчитать!</a>";

    var currencyExchanger = function (amount, rate, scale) {
        if (scale === undefined) scale = 1;
        if (amount === undefined || rate === undefined) {
            return 0;
        }
        return amount * scale / rate;
    };

    document.getElementById('calculate').onclick = function () {
        var usd, eur, rub, message;
        usd = getValue("usdInput");
        eur = getValue("eurInput");
        rub = getValue("rubInput");
        insertMessage("result");
        if (inputCheck(usd) == false) {
            message = "<span style=color:red;>Курс доллара не задан, или задан неверно: значение должно быть больше нуля, для десятичной части используйте точку.</span>";
            insertMessage("result", message);
        }
        else if (inputCheck(eur) == false) {
            message = "<span style=color:red;>Курс евро не задан, или задан неверно: значение должно быть больше нуля, для десятичной части используйте точку.</span>";
            insertMessage("result", message);
        }
        else if (inputCheck(rub) == false) {
            message = "<span style=color:red;>Сумма в рублях не задана, или задан неверно: значение должно быть больше нуля, для десятичной части используйте точку.</span>";
            insertMessage("result", message);
        }
        else {
            message = rub.toFixed(2) + " рублей равны " + currencyExchanger(rub, usd, 1).toFixed(2) + " долларов или " + currencyExchanger(rub, eur, 1).toFixed(2) + " евро.";
            insertMessage("result", message);
        }
    };
}