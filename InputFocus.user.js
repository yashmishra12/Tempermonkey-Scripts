// ==UserScript==
// @name         InputFocus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Brings focus to first Input Field
// @author       Yash
// @match        https://www.amazon.in/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.onkeyup = function(e) {
        if (e.altKey && e.which == 83) { //get keycodes from http://keycode.info

            if(window.location.hostname === "www.amazon.in"){
                document.querySelector("#twotabsearchtextbox").focus();
            }
            else if(window.location.hostname === "www.youtube.com" ) {
                document.querySelector("input#search.ytd-searchbox").focus();
            }
            else if(window.location.hostname === "www.google.co.in"){
                document.querySelector("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input").focus();
            }
            else if(window.location.hostname === "www.google.com"){
                document.querySelector("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input").focus();
            }
            else {
                console.log("Website not added in the list");
            }
        }
    };
})();