/*Symptoms Section Scrollevent handling */
var symptomsImages = document.getElementsByClassName("symptoms-img");

var symptomsContent = [{
    title: "Les premiers jours :",
    paragraph: "La plupart ont de la fièvre. Le virus peut également provoquer des douleurs musculaires, de la fatigue, des  étourdissements et même de la diarrhée. La plupart montrent des signes d’amélioration après 6 à 7 jours.",
}, {
    title: "Aux premiers stades de la maladie:",
    paragraph: "Les symptômes courants seront les maux de tête, la toux sèche et le nez qui coule. Finalement, si la maladie s’aggrave, le patient peut avoir une toux grasse ou même une toux sanglante.",
}, {
    title: "Complications :",
    paragraph: "Une respiration difficile et / ou des douleurs thoraciques. Une insuffisance pulmonaire aiguë ou un essoufflement nécessitant un apport d’oxygène peut survenir dans les pires cas. Les symptômes surviennent généralement vers le cinquième jour de la maladie.",
}, {
    title: "Dans certains cas :",
    paragraph: "Le coronavirus entraîne une insuffisance rénale. Les symptômes comprennent des visites fréquentes aux toilettes, un gonflement des jambes et sous les yeux, une pression artérielle élevée et / ou une fatigue et une faiblesse."
}
];


function changeSymptomsContent(e) {
    var arr = [].slice.call(symptomsImages);
    title = document.getElementsByClassName("symptoms-title")[0];
    paragraph = document.getElementsByClassName("symptoms-paragraph")[0];

    title.innerHTML = symptomsContent[arr.indexOf(e)].title;
    paragraph.innerHTML = symptomsContent[arr.indexOf(e)].paragraph;

    // Showing Button, or not
    var btn= document.getElementById("symptoms-test-btn");
    if (arr.indexOf(e) === 3) {
        // btn.style.display = "block";
        btn.style.width = "auto";
        btn.style.height = "auto";
        btn.style.padding = "8px 25px";
        setTimeout(1000);
        btn.style.opacity = "1";
    } else {
        btn.style.opacity = 0;
        btn.style.width = "0";
        btn.style.height = "0";
        btn.style.padding = "0  ";
    }

}
/***************************************/



window.onscroll = () => {
    symptomsImages.forEach(image => {
        if (image.getBoundingClientRect().top <= window.outerHeight/2 && 0 <= image.getBoundingClientRect().top) {
            image.style.opacity = 1;
                changeSymptomsContent(image);
        } else {
            image.style.opacity = 0;
            if (image.id == "symptoms-img-4" && (image.getBoundingClientRect().bottom <= window.outerHeight / 2 || image.getBoundingClientRect().top <= 0)) {
                image.style.opacity = 1;
            }
        }
        // if (image.getBoundingClientRect().bottom <= window.outerHeight/2) {
        //     changeAuthorised = true;
        //     image.style.opacity = 0;
        // }
    });
};

