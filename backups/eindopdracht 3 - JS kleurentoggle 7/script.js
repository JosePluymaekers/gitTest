/* let menu = document.getElementsByClassName("menu__hamburger");


menu.addEventListener('click', function (e) {
    alert("je hebt een knop ingedrukt");
});

 */

// let menuknop = document.getElementsByClassName('menu__hamburger');
var menuknop = document.getElementsByClassName('menu__hamburger')
console.log(menuknop)

var menuknoppen = document.getElementsByClassName('menu__buttons')
console.log(menuknoppen)

var list = document.getElementsByTagName('li')
console.log(list)

var body = document.getElementsByClassName('grey-background')
console.log(body)

menuknop[0].addEventListener('click', function (e) {
    console.log("de hamburger werkt");
    menuknoppen[0].classList.add("moveOut")
})

list[0].addEventListener('click', function (e) {
    console.log("het werkt");
    body[0].classList.add("blue-background");
    body[0].classList.remove("coral-background", "salmon-background", "yellow-background");
    menuknoppen[0].classList.remove("moveOut")

})

list[1].addEventListener('click', function (e) {
    console.log("het werkt");
    body[0].classList.add("coral-background");
    body[0].classList.remove("blue-background", "salmon-background", "yellow-background");
    menuknoppen[0].classList.remove("moveOut")

})

list[2].addEventListener('click', function (e) {
    console.log("het werkt");
    body[0].classList.add("yellow-background");
    body[0].classList.remove("blue-background", "salmon-background", "coral-background");
    menuknoppen[0].classList.remove("moveOut")
})

list[3].addEventListener('click', function (e) {
    console.log("het werkt");
    body[0].classList.add("salmon-background");
    body[0].classList.remove("blue-background", "coral-background", "yellow-background");
    menuknoppen[0].classList.remove("moveOut")
})
