window.onload = function () {
    var loader = document.getElementById("loader");
    var content = document.getElementById("content-wrapper");
    var body = document.querySelector("body");

    content.style.opacity = "1";
    loader.style.opacity = 0;
    setTimeout(() => {
        loader.style.display = "none";
        body.style.overflowY = "scroll";
        },
        2000);
};