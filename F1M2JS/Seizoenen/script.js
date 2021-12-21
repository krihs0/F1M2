const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");

let seizoenen = [
    {
        "titel":"Seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"gray"
    },
    {
        "titel":"Lente",
        "image":"img/spring.jpg",
        "backGround":"green"
    },
    {
        "titel":"Zomer",
        "image":"img/summer.jpg",
        "backGround":"yello"
    },
    {
        "titel":"Herfst",
        "image":"img/autumn.jpg",
        "backGround":"orange"
    },
    {
        "titel":"Winter",
        "image":"img/winter.jpg",
        "backGround":"blue"
    }
]

//let seizoen = {
//    "titel":"lente",
//    "image":"img/spring.jpg"
//};

function show(index){
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;
};
