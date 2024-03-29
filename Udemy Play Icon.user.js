// ==UserScript==
// @name         Udemy Play Icon
// @version      2
// @description  Removes Udemy Play Icon on Pause
// @author       Yash Mishra
// @match        https://www.udemy.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    try {
        setInterval(function () {
            var elem = document.querySelector('.video-player--center--2vS3g');
            if(elem === null) {
                setTimeout( ()=>{}, 8000)
            }else {
                elem.parentNode.removeChild(elem);
            }
        }, 0);
    }catch(e){
        console.log("CJS met with an error")
    }
})();