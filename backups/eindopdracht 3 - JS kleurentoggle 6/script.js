/* let menu = document.getElementsByClassName("menu__hamburger");


menu.addEventListener('click', function (e) {
    alert("je hebt een knop ingedrukt");
});

 */

// let menuknop = document.getElementsByClassName('menu__hamburger');
var menuknop = document.querySelector('menu__hamburger')

document.getElementsByClassName('menu__buttons')

var list = document.getElementsByTagName('li')
console.log(list)

var body = document.getElementsByClassName('grey-background')
console.log(body)

list[0].addEventListener('click', function (e) {
    console.log("het werkt");
    body[0].classList.toggle("blue-background");
})

list[1].addEventListener('click', function (e) {
    console.log("het werkt");
    body[0].classList.toggle("coral-background");
})

list[2].addEventListener('click', function (e) {
    console.log("het werkt");
    body[0].classList.toggle("yellow-background");
})

list[3].addEventListener('click', function (e) {
    console.log("het werkt");
    body[0].classList.toggle("salmon-background");
})