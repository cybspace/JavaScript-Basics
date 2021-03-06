/**
 * Created by dkolontsov on 06.09.2016.
 */
"use strict"
window.onload = function () {

    //index.html
    document.getElementById('intro').innerHTML = "Приветствую! Меня зовут <strong>KODI</strong> и я - <em>начинающий программист</em>. Этот сайт я создал на бесплатных уроках от <a id=text_link href=https://geekbrains.ru/>Geek Brains</a>.";
    document.getElementById('result').innerHTML = "На этом сайте вы можете посмотреть програмки, которые я написал:";

    //"program" calls on link clicks
    document.getElementById('riddlesProgram_1').onclick = riddlesProgram;
    document.getElementById('riddlesProgram_2').onclick = riddlesProgram;
    document.getElementById('guessNumber_1').onclick = guessNumberProgram;
    document.getElementById('guessNumber_2').onclick = guessNumberProgram;
    document.getElementById('currencyExchange_1').onclick = currencyExchangeProgram;
    document.getElementById('currencyExchange_2').onclick = currencyExchangeProgram;
    document.getElementById('creditCalculator_1').onclick = creditCalculatorProgram;
    document.getElementById('creditCalculator_2').onclick = creditCalculatorProgram;
    document.getElementById('depositCalculator_1').onclick = depositCalculatorProgram;
    document.getElementById('depositCalculator_2').onclick = depositCalculatorProgram;
    

};