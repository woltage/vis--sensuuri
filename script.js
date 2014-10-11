// ==UserScript==
// @name         Kurittaja
// @namespace    kurittaja
// @include      https://psa6.valueframe.com/tunnit/*
// @require 	 https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @author       Iiro Uusitalo
// ==/UserScript==

$(document).ready(function() {
var rankaisia = $('body').html().replace(/viski/gi, "!!SENSUROITU!!");
$('body').html(rankaisia);
});
