faqElements = document.getElementsByClassName("faq-element");

faqElements.forEach(e => {
    console.log("Hello");
    e.onclick = () => {
        window.alert("Hello");
        if (!e.classList.contains("open")) {
            e.classList.add("open");
        } else
            e.classList.remove("open");
    };
});