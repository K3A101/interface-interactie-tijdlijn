// JavaScript Document
console.log("Howdy!");

// VARIABELEN
// Variabele voor de speech bubble
const deButton = document.querySelectorAll("article:nth-of-type(2) li>button");
const bubbles = document.querySelectorAll("article:nth-of-type(2) li>section");

//Variabele voor de power up menu
var tanookiButton = document.querySelector("footer  li:nth-of-type(4");
var vuurBloembutton = document.querySelector("footer  li:nth-of-type(2");
var mushroomButtom = document.querySelector("footer  li:nth-of-type(1)");
var ijsBloemButton = document.querySelector("footer  li:nth-of-type(3)");
var sterButton = document.querySelector("footer  li:nth-of-type(5)");

// Variabel voor de joystick
var joystickNintendo = document.querySelector("article:first-of-type>section>button");


//Variabelen voor de mario selectie menu
var mario1981Button = document.querySelector("article:nth-of-type(2) img:nth-of-type(1)");
var mario1985Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(2)");
var mario1991Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(3)");
var mario1992Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(4)");
var mario2006Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(5)");
var mario2007Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(6)");
var mario2013Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(7)");
var mario2015Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(8)");
var mario2020Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(9)");


// SPEECHBUBBLES
var button1 = document.querySelector('article > ol >li:first-of-type');
var button2 = document.querySelector('article > ol li:nth-child(2) button');
var button3 = document.querySelector('article > ol li:nth-child(3) button');
var button4 = document.querySelector('article > ol li:nth-child(4) button');
var button5 = document.querySelector('article > ol li:nth-child(5) button');
var button6 = document.querySelector('article > ol li:nth-child(6) button');
var button7 = document.querySelector('article > ol li:nth-child(7) button');
var button8 = document.querySelector('article > ol li:nth-child(8) button');
var button9 = document.querySelector('article > ol li:nth-child(9) button');



// EVENTLISTENERS
// POWER UP MENUS BUTTONS
// Click event op de grote mario afbeelding
tanookiButton.addEventListener("click", marioTanooki);
vuurBloembutton.addEventListener("click", marioPyroman);
mushroomButtom.addEventListener("click", haalNintendoWeg);
joystickNintendo.addEventListener("click", speelAnimatieMetControllers);
ijsBloemButton.addEventListener("click", marioIjsBloem);
sterButton.addEventListener("click", speelHetMuziek);




//ARROW FUNCTIES 
// Arrow functie en eventlisteners  voor de speech bubble
button1.addEventListener("click", function () {
    var bubble = document.querySelector('article > ol li:nth-of-type(1) section')
    bubble.classList.toggle("openBubble");
});

button2.addEventListener("click", () => {
    var bubble = document.querySelector('article > ol li:nth-of-type(2) section')
    bubble.classList.toggle("openBubble");
});
button3.addEventListener("click", () => {
    var bubble = document.querySelector('article > ol li:nth-of-type(3) section')
    bubble.classList.toggle("openBubble");
});
button4.addEventListener("click", () => {
    var bubble = document.querySelector('article > ol li:nth-of-type(4) section')
    bubble.classList.toggle("openBubble");
});
button5.addEventListener("click", () => {
    var bubble = document.querySelector('article > ol li:nth-of-type(5) section')
    bubble.classList.toggle("openBubble");
});
button6.addEventListener("click", () => {
    var bubble = document.querySelector('article > ol li:nth-of-type(6) section')
    bubble.classList.toggle("openBubble");
});
button7.addEventListener("click", () => {
    var bubble = document.querySelector('article > ol li:nth-of-type(7) section')
    bubble.classList.toggle("openBubble");
});
button8.addEventListener("click", () => {
    var bubble = document.querySelector('article > ol li:nth-of-type(8) section')
    bubble.classList.toggle("openBubble");
});
button9.addEventListener("click", () => {
    var bubble = document.querySelector('article > ol li:nth-of-type(9) section')
    bubble.classList.toggle("openBubble");
});



// Functie die ervoor zorgt dat de geselecteerde mario op de nintendo switch komen op te staan
var nintendoSwitch = document.querySelector("article > figure > img");

mario1981Button.addEventListener("click", () => {
    nintendoSwitch.src = './images/mario-donkey-kong.png';
});

mario1985Button.addEventListener("click", () => {
    nintendoSwitch.src = './images/first-mario.png';
});

mario1991Button.addEventListener("click", () => {
    nintendoSwitch.src = './images/mario-super-mario-bro-3.png';
});

mario1992Button.addEventListener("click", () => {
    nintendoSwitch.src = './images/mario-kart-1993.png';
});

mario2007Button.addEventListener("click", () => {
    nintendoSwitch.src = './images/mario-galaxy.png';
});

mario2006Button.addEventListener("click", () => {
    nintendoSwitch.src = './images/mario-wii.png';
});

mario2020Button.addEventListener("click", () => {
    nintendoSwitch.src = './images/mario-paper.png';
});

mario2015Button.addEventListener("click", () => {
    nintendoSwitch.src = './images/mario-maker.png';
});

mario2013Button.addEventListener("click", () => {
    nintendoSwitch.src = './images/mario-3d.png';
});



//FUNCTIES
// Functie voor de Grote afbeelding
function marioTanooki() {
    var groteMarioAfbeelding = document.querySelector("article:first-of-type img");
    groteMarioAfbeelding.classList.toggle("tanooki-afbeelding");
    var deH1 = document.querySelector("article:first-of-type h1");
    if (groteMarioAfbeelding.classList.contains("tanooki-afbeelding")) {
        deH1.innerHTML = "Tanooki Mario"
    } else {
        deH1.innerHTML = "Mario Seagale"
    }
}

//Functie van Mario in vuur Pak
function marioPyroman() {
    var pyroMarioAfbeelding = document.querySelector("article:first-of-type img");
    pyroMarioAfbeelding.classList.toggle("pyromaan-afbeelding");
    var deTweedeTitel = document.querySelector("article:first-of-type h1");
    if (pyroMarioAfbeelding.classList.contains("pyromaan-afbeelding")) {
        deTweedeTitel.innerHTML = "Pyro Mario";
    } else {
        deTweedeTitel.innerHTML = "Mario Seagale";
    }
}

// Functie dat stop de springende Mario animatie
function speelAnimatieMetControllers() {
    var deAnimatie = document.querySelector(" .wrapper img");
    var deWrapper = document.querySelector(".wrapper");
    deAnimatie.classList.toggle("pauseer-animatie");
    deWrapper.classList.toggle("pauseer-animatie");
}

// Haal Nintendo weg
function haalNintendoWeg() {
    var deNintendo = document.querySelector("article:nth-of-type(1)");
    deNintendo.classList.toggle("haal-weg");
}
//Mario in ijs pak
function marioIjsBloem() {
    var ijsPakAfbeelding = document.querySelector("article:first-of-type img");
    ijsPakAfbeelding.classList.toggle("ijspak-mario");
    var deDerdeTitel = document.querySelector("article:first-of-type h1");
    if (ijsPakAfbeelding.classList.contains("ijspak-mario")) {
        deDerdeTitel.innerHTML = "Mario als winterman";
    } else {
        deDerdeTitel.innerHTML = "Mario Seagale"
    }
}

// Als de gebruiker op de sterretje speelt dan komt hoor je een muziek in de achtergrond
function speelHetMuziek() {
    // var url = "../audio/super-mario-star-sound";
    var deBody = document.querySelector("body");

    const audio = new Audio("../audio/super-mario-star-sound.mp3");
    sterButton.classList.toggle("speel-muziek");
    if (sterButton.classList.contains("speel-muziek")) {
        deBody.classList.add("regenboog-achtergrond");
        audio.play();
    } else {
        audio.currentTime = 0;
        audio.pause();
        deBody.classList.remove("regenboog-achtergrond");
        //Bron: hoe je geluid kan toevoegen met javascript https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
    }
}

