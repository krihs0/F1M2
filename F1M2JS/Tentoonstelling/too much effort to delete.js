const myImage = document.getElementById("myImage");
const myTitle = document.getElementById("myTitle");
const myDescription1 = document.getElementById("myDescription1");
const myDescription2 = document.getElementById("myDescription2");
const myDescription3 = document.getElementById("myDescription3");

let paintings = [
    "img/painting0.jpg", 
    "img/painting1.jpg", 
    "img/painting2.jpg", 
    "img/painting3.jpg", 
    "img/painting4.jpg", 
    "img/painting5.jpg"
];

let titles = [
    "Van Gogh tekst",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rh�ne",
    "Zonnebloemen ",
    "Boerderij in de Provence"
];

let description1 = [
    "",
    "november 1888",
    "juni 1889",
    "september 1888",
    "januari 1889",
    "september 1888"
];

let description2 = [
    "",
    "Pesjkinmuseum",
    "Museum of Modern Art",
    "Mus�e d'Orsay" ,
    "Neue Pinakothek",
    "National Gallery of Art"
];

let description3 = [
    "",
   "Moskouw",
    "New York",
    "Parijs",
    "Munchen",
    "Washington D.C."
];

function changeImage(index){
    myDescription1.innerHTML = description1[index];
    myDescription2.innerHTML = description2[index];
    myDescription3.innerHTML = description3[index];
    myTitle.innerHTML = titles[index]
    myImage.src = paintings[index];
}