
var menuknop = document.getElementsByClassName('menu__hamburger')
console.log(menuknop)

var menuknoppen = document.getElementsByClassName('menu__buttons')
console.log(menuknoppen)

var list = document.getElementsByTagName('li')
console.log(list)

var body = document.getElementsByClassName('grey-background')
console.log(body)

/* menuknop[0].addEventListener('click', function (e) {
    console.log("de hamburger werkt");
    menuknoppen[0].classList.add("moveOut")
}) */

menuknop[0].addEventListener('mouseover', function (e) {
    console.log("de hamburger werkt");
    menuknoppen[0].classList.toggle("moveOut")
})

list[0].addEventListener('click', function () {
    console.log("het werkt");
    body[0].classList.add("blue-background");
    body[0].classList.remove("coral-background", "salmon-background", "yellow-background");
    menuknoppen[0].classList.remove("moveOut")
})

list[1].addEventListener('click', function () {
    console.log("het werkt");
    body[0].classList.add("coral-background");
    body[0].classList.remove("blue-background", "salmon-background", "yellow-background");
    menuknoppen[0].classList.remove("moveOut")

})

list[2].addEventListener('click', function () {
    console.log("het werkt");
    body[0].classList.add("yellow-background");
    body[0].classList.remove("blue-background", "salmon-background", "coral-background");
    menuknoppen[0].classList.remove("moveOut")
})

list[3].addEventListener('click', function () {
    console.log("het werkt");
    body[0].classList.add("salmon-background");
    body[0].classList.remove("blue-background", "coral-background", "yellow-background");
    menuknoppen[0].classList.remove("moveOut")
})


document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "1") {
        console.log("de 1 werkt");
        body[0].classList.add("salmon-background");
        body[0].classList.remove("blue-background", "coral-background", "yellow-background");
        menuknoppen[0].classList.remove("moveOut")
    }
})

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "2") {
        console.log("de 2 werkt");
        body[0].classList.add("coral-background");
        body[0].classList.remove("blue-background", "salmon-background", "yellow-background");
        menuknoppen[0].classList.remove("moveOut")
    }
})

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "3") {
        console.log("de 3 werkt");
        body[0].classList.add("yellow-background");
        body[0].classList.remove("blue-background", "salmon-background", "coral-background");
        menuknoppen[0].classList.remove("moveOut")
    }
})


document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "4") {
        console.log("de 4 werkt");
        body[0].classList.add("salmon-background");
        body[0].classList.remove("blue-background", "coral-background", "yellow-background");
        menuknoppen[0].classList.remove("moveOut")
    }
})


