/**
 * Created by spacemonk on 15/09/2016.
 */
//Проверяем входящее значение
var inputCheck = function (value, isFull) {
    if (isFull === undefined) isFull = false;

    if (isNaN(value) || value <= 0) return false;
    else if (isFull === true && (value - parseFloat(value).toFixed(0) !== 0)) return false;
    else return true;
};


//Получаем значение из textbox
var getValue = function (name) {
    if (name === undefined) name = "";
    return +document.getElementById(name).value;
};

var getStringValue = function (name) {
    if (name === undefined) name = "";
    return document.getElementById(name).value;
};

//записываем значение в нужный тег
var insertMessage = function (elementId, message) {
    if (message === undefined) message = "";
    document.getElementById(elementId).innerHTML = message;
};

//обновляем значение в нужном теге
var updateMessage = function (elementId, message) {
    if (message === undefined) message = "";
    document.getElementById(elementId).innerHTML += message;
};