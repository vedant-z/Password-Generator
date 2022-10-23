var btn = document.querySelector('#btn');
var btn1 = document.querySelector('#btn1');
var len = document.querySelector('#len');
var length1 = document.querySelector('#length1');

btn1.addEventListener('click', function () {
    var s = '';
    var l = len.value;
    length1.innerHTML = l;
    while (s.length < l) {
        var n = Math.floor(Math.random() * 94) + 33;
        s += String.fromCharCode(n);
    }
    btn.innerHTML = s;
})