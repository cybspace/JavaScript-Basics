/**
 * Created by spacemonk on 07/09/2016.
 */
function currencyExchangeProgram () {

    var usdExchRate = 65.44, eurExchRate = 73.89, rubAmmount, clickCalc = 0;

    document.getElementById('pageName').innerHTML = "Конвертер валют";
    document.getElementById('intro').innerHTML = "Я помогу пересчитать любую сумму рублей в доллары и евро.";
    document.getElementById('output_1').innerHTML = "Курс доллара: <input type=text id=usdInput />";
    document.getElementById('output_2').innerHTML = "Курс евро: <input type=text id=eurInput />";
    document.getElementById('output_3').innerHTML = "Сумма в рублях: <input type=text id=rubInput />";
    document.getElementById('result').innerHTML = "";
    document.getElementById('programLinks').innerHTML = "<a href=# class=inboxLink id=calculate>Рассчитать!</a>";

    var inputCheck = function (value, isFull) {
        if (isFull === undefined) isFull = false;
        if (isFull == true && (isNaN(value) || value <= 0 || (value - value.toFixed(0)) !== 0)) return false;
        else if (isFull == false && (isNaN(value) || value <= 0)) return isFull;
        else return true;
    };

    var currencyExchanger = function (amount, curExchRate, scale) {
        if (amount === undefined || curExchRate === undefined || scale ===undefined) {
            return 0;
        }
        return amount * scale / curExchRate;
    };

    var getFloatValue = function (name) {
        if (name === undefined) name = "";
        return parseFloat(document.getElementById(name + 'Input').value);
    };

    var insertMessage = function (elementId, message) {
        if (message === undefined) message = "";
        document.getElementById(elementId).innerHTML = message;
    };

    document.getElementById('calculate').onclick = function () {
        var usd, eur, rub, message;
        usd = getFloatValue("usd");
        eur = getFloatValue("eur");
        rub = getFloatValue("rub");
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