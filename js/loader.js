// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);



window.onresize = function () {
    let vh = window.innerHeight * 0.01;
    console.log(vh);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.onload = function () {
    var loader = document.getElementById("loader");
    var content = document.getElementById("content-wrapper");
    var body = document.getElementById("document");

    content.style.opacity = "1";
    loader.style.opacity = 0;
    setTimeout(() => {
            loader.parentNode.removeChild(loader);
            body.style.overflowY = "scroll";
        },
        2000);
};