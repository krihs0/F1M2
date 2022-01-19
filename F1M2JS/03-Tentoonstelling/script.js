const myImage = document.getElementById("myImage");
const myTitle = document.getElementById("myTitle");
const myDescription = document.getElementById("myDescription");

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

let descriptions = [
"",
"<span>november 1888</span><span>Pesjkinmuseum</span><span>Moskouw</span>",
"<span>juni 1889</span><span>Museum of Modern Art</span><span>New York</span>",
"<span>september 1888</span><span>Mus�e d'Orsay</span><span>Parijs</span>",
"<span>januari 1889</span><span>Neue Pinakothek</span><span>Munchen</span>",
"<span>september 1888</span><span>National Gallery of Art</span><span>Washington D.C.</span>"
];

function changeImage(index){
    myDescription.innerHTML = descriptions[index];
    myTitle.innerHTML = titles[index]
    myImage.src = paintings[index];
}