"use strict";
var cordova_1 = require("cordova");
var HelloKotlin = (function () {
    function HelloKotlin() {
    }
    HelloKotlin.hello = function (input, successCallback, errorCallback) {
        cordova_1.exec(successCallback, errorCallback, "HelloKotlin", "hello", [input]);
    };
}());

module.exports = HelloKotlin;
