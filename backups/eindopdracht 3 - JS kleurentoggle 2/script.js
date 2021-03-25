const btn = document.querySelector('#mybutton');
const btn2 = document.querySelector('#mybutton2');
const body = document.querySelector('.blue-background')


btn.addEventListener('click', function (e) {
    alert("je hebt een knop ingedrukt");
});


btn2.addEventListener('click', function (togglecolor) {
    body.classList.toggle("red-background");
});