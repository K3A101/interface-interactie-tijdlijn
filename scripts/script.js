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

// button om de nintendo te verbergen
// var deWolkenButton = document.querySelector("article:first-of-type > button ");

//mario selectie menu
var mario1981Button = document.querySelector("article:nth-of-type(2) img:nth-of-type(1)");
var mario1985Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(2)");
var mario1991Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(3)");
var mario1992Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(4)");
var mario2006Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(5)");
var mario2007Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(6)");
var mario2013Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(7)");
var mario2015Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(8)");
var mario2020Button = document.querySelector("article:nth-of-type(2) ol li:nth-of-type(9)");


// Speechbubbles
var button1 = document.querySelector('article > ol >li:first-of-type');
var button2 = document.querySelector('article > ol li:nth-child(2) button');
var button3 = document.querySelector('article > ol li:nth-child(3) button');
var button4 = document.querySelector('article > ol li:nth-child(4) button');
var button5 = document.querySelector('article > ol li:nth-child(5) button');
var button6 = document.querySelector('article > ol li:nth-child(6) button');
var button7 = document.querySelector('article > ol li:nth-child(7) button');
var button8 = document.querySelector('article > ol li:nth-child(8) button');
var button9 = document.querySelector('article > ol li:nth-child(9) button');

// Variabele voor de body




// EVENTLISTENERS
// Click event op de grote mario afbeelding
tanookiButton.addEventListener("click", marioTanooki);
vuurBloembutton.addEventListener("click", marioPyroman);
mushroomButtom.addEventListener("click", haalNintendoWeg);
joystickNintendo.addEventListener("click", playAnimatieMetControllers);
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


//arrow functie en eventlisteners voor de mario selectie menu
// var nintendoSwitch = document.querySelector("article > figure > img");

// mario1981Button.addEventListener("click", () => {
//     nintendoSwitch.src = 'https://github.com/K3A101/interface-interactie-tijdlijn/blob/main/images/mario-donkey-kong.png';
// });

// mario1985Button.addEventListener("click", () => {
//     nintendoSwitch.src = 'https://github.com/K3A101/interface-interactie-tijdlijn/blob/main/images/first-mario.png';
// });


// mario1991Button.addEventListener("click", () => {
//     nintendoSwitch.src = 'https://github.com/K3A101/interface-interactie-tijdlijn/raw/main/images/mario-super-mario-bro-3.png';
// });

// mario1992Button.addEventListener("click", () => {
//     nintendoSwitch.src = 'https://github.com/K3A101/interface-interactie-tijdlijn/raw/main/images/mario-kart-1993.png';
// });

// mario2007Button.addEventListener("click", () => {
//     nintendoSwitch.src = 'https://github.com/K3A101/interface-interactie-tijdlijn/raw/main/images/mario-galaxy.png';
// });

// mario2006Button.addEventListener("click", () => {
//     nintendoSwitch.src = 'https://github.com/K3A101/interface-interactie-tijdlijn/raw/main/images/mario-wii.png';
// });

// mario2020Button.addEventListener("click", () => {
//     nintendoSwitch.src = 'https://github.com/K3A101/interface-interactie-tijdlijn/raw/main/images/mario-paper.png';
// });

// mario2015Button.addEventListener("click", () => {
//     nintendoSwitch.src = 'https://github.com/K3A101/interface-interactie-tijdlijn/raw/main/images/mario-maker.png';
// });

// mario2013Button.addEventListener("click", () => {
//     nintendoSwitch.src = 'https://github.com/K3A101/interface-interactie-tijdlijn/raw/main/images/mario-3d.png';
// });




var nintendoSwitch = document.querySelector("article > figure > img");

mario1981Button.addEventListener("click", () => {
    nintendoSwitch.src = './main/images/mario-donkey-kong.png';
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
function playAnimatieMetControllers() {
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

        //https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
    }
}



// 






// FUNCTIES
// Functie voor de Speech Bubble

// var button = document.querySelector('article > ol li button')
// var button2 = document.querySelector('article > ol li button')

// button.addEventListener("click", speechBubble);
// button2.addEventListener("click", speechBubble);

// function speechBubble() {
//     var bubble = document.querySelector('article ol li section')
//     bubble.classList.toggle("openBubble");
// }







//  var deButton = document.querySelector("article:nth-of-type(2) li.open");

//  deButton.addEventListener("click", (e)=>{
//     if (e.target.matches("article:nth-of-type(2) li>section"))
//  })




// Ik heb het geprobeerd

// const selector = "article:nth-of-type(2) li >"
// const imageSelector = `${selector} button`;
// const speechBubbleSelector = `${selector} section`;
// const openClass = `open`;
// // const marioAfbeeldingen = document.querySelectorAll("article:nth-of-type(2) li>button");

// const marioAfbeeldingen = document.querySelectorAll(imageSelector);
// marioAfbeeldingen.forEach(function (afbeelding) {
//     afbeelding.addEventListener("click", function (event) {
//         if (!event.target.matches(imageSelector)) {
//             return;
//         }
//         const targetImg = event.target;
//         const parentElement = targetImg.closest(speechBubbleSelector);
//         console.log(parentElement);
//         if (!parentElement.classList.contains(openClass)) {
//             parentElement.classList.add(openClass);
//         } else {
//             parentElement.classList.remove(openClass);
//         }
//     });
// });




// var marioButtons = document.querySelectorAll('article:nth-of-type(2) li>button');
// var speechBubble = document.querySelectorAll("article:nth-of-type(2) li>section");

// marioButtons.forEach(function (i) {
//     i.addEventListener('click', function (e) {
//         const clickedBtnIndex = [...buttonArray].indexOf(e.target);
//         speechBubble[clickedBtnIndex].classList.toggle("open");
//     });
// });



// const marioButtons = document.querySelectorAll('article:nth-of-type(2) li>button');

// marioButtons.forEach(buttons => {
//     buttons.addEventListener('click', function handleClick(event) {
//         console.log('box clicked', event);
//       document.querySelectorAll("article:nth-of-type(2) li>section").forEach(image => {
//             image.classList.toggle('open');
//         })

//     });
// });

// var marioContainer = document.querySelector("article:nth-of-type(2) li > button");
// var selector = document.querySelector("article:nth-of-type(2) li>section");

// marioContainer.addEventListener("click", function(event){
//  let waaw = event.target.closest(selector);
//  if (waaw && marioContainer.contains(waaw)) {
//    waaw.classList.toggle("maakMeZichtbaar");
//  }
// });




// deButton.addEventListener("click", speechBubble);

// function speechBubble() {
//     var bubble = document.querySelector("article:nth-of-type(2) li>section ");

//     bubble.classList.toggle("open");

// }


// var deButton = document.querySelector("article:nth-of-type(2) li>button");


// deButton.addEventListener("click", speechBubble);

// function speechBubble() {
//     var bubble = document.querySelector("article:nth-of-type(2) li>section ");

//     bubble.classList.toggle("open");

// }
// var deLiBlokjes = document.querySelectorAll("article:nth-of-type(2) li");
// console.log(deLiBlokjes);

// deLiBlokjes.forEach((blokjes) =>{

// blokjes.classList.toggle("verbergen");
// function popUp() {
//     var marioAfbeelding = document.querySelectorAll("article:nth-of-type(2) li>button> img");
//     marioAfbeelding.forEach((afbeelding =>{
//         afbeelding.classList.toggle("open");
//     }))
// }
// blokjes.addEventListener("click", popUp);
// });