// JavaScript Document
console.log("Howdy!");

// Variabele maken voor de Li, en de image
const deButton = document.querySelectorAll("article:nth-of-type(2) li>button");
console.log(deButton);
const bubbles = document.querySelectorAll("article:nth-of-type(2) li>section")

deButton.forEach(button => {
    button.addEventListener("click", speechBubble);

    function speechBubble() {
        bubbles.forEach(bubble => {
            bubble.classList.toggle("open");
        });
    }

});




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