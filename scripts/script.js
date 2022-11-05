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

// Variabel voor de joystick
var joystickNintendo = document.querySelector("article:first-of-type>section>button");


// EVENTLISTENERS
// Click event op de grote mario afbeelding
tanookiButton.addEventListener("click", marioTanooki);
vuurBloembutton.addEventListener("click", marioPyroman);
mushroomButtom.addEventListener("click", marioWordtGroter);
joystickNintendo.addEventListener("click", playAnimatieMetControllers );

// FUNCTIES
// Functie voor de Speech Bubble
deButton.forEach(button => {
    button.addEventListener("click", speechBubble);
    function speechBubble() {
        bubbles.forEach(bubble => {
            bubble.classList.toggle("openBubble");
        });
    }
});

// Functie voor de Grote afbeelding
function marioTanooki(){
    var groteMarioAfbeelding = document.querySelector("article:first-of-type img");
    groteMarioAfbeelding.classList.toggle("nieuwe-afbeelding");
     var deH1 = document.querySelector("article:first-of-type h1");
     if (groteMarioAfbeelding.classList.contains("nieuwe-afbeelding")) {
         deH1.innerHTML = "Tanooki Mario"
     } else {
         deH1.innerHTML = "Mario Oddessy"
     }
}

//Functie van Mario in vuur Pak
function marioPyroman(){
      var tweedemarioAfbeelding = document.querySelector("article:first-of-type img");
      tweedemarioAfbeelding.classList.toggle("tweede-afbeelding");
      var deTweedeTitel = document.querySelector("article:first-of-type h1");
      if(tweedemarioAfbeelding.classList.contains("tweede-afbeelding")){
        deTweedeTitel.innerHTML = "Pyro Mario";
      } else {
          deTweedeTitel.innerHTML = "Mario Oddessy";
      }
}

// Functie Mario Wordt groter

function marioWordtGroter() {
    var derdeAfbeelding = document.querySelector("article:first-of-type img");
    derdeAfbeelding.classList.toggle("derde-afbeelding");
}

// Functie dat stop de springende Mario animatie
function playAnimatieMetControllers() {
   var deAnimatie = document.querySelector(" .wrapper img");
   var deWrapper = document.querySelector(".wrapper");
   deAnimatie.classList.toggle("pauseer-animatie");
   deWrapper.classList.toggle("pauseer-animatie");
}


 














//  var deButton = document.querySelector("article:nth-of-type(2) li.open");

//  deButton.addEventListener("click", (e)=>{
//     if (e.target.matches("article:nth-of-type(2) li>section"))
//  })




// Ik heb geprobeerd

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