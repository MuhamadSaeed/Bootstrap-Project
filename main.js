let more = document.querySelector("#portfolio .show .more"),
    less = document.querySelector("#portfolio .show .less"),
    boxs = document.querySelectorAll("#portfolio .boxs .box")
    
more.addEventListener("click", function() {
    for (i=0; i < boxs.length; i++) {
        if (boxs[i].dataset.vis == "yes") {
            boxs[i].style.display = "block"
            this.style.display = "none"
            less.style.display = "inline"
        }
    }
})
less.addEventListener("click", function() {
    for (i=0; i < boxs.length; i++) {
        if (boxs[i].dataset.vis == "yes") {
            boxs[i].style.display = "none"
            this.style.display = "none"
            more.style.display = "inline"
        }
    }
})

document.querySelector("nav .lastbtn").onclick = function () {
    document.querySelector("#contact").scrollIntoView()
}
document.querySelector("header .master").onclick = function () {
    document.querySelector("#contact").scrollIntoView()
}
document.querySelector("header .main").onclick = function () {
    document.querySelector("#about").scrollIntoView()
}
document.querySelector("#about button.main").onclick = function () {
    document.querySelector("#contact").scrollIntoView()
}