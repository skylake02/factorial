(function () {
    'use strict';

    var input   = document.getElementById('input'),
        num,
        form    = document.getElementById("submit"),
        output  = document.querySelector("#output p");

    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    form.addEventListener("submit", function (event) {
        num = input.value;
        output.textContent = factorial(num);
        event.preventDefault();
    }, false);

    
}());