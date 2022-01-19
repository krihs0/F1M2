console.log("script is geladen!");

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetinfruitla(fruit){
    console.log(fruit);

    const nieuwelement = document.createElement('h3');
    nieuwelement.innerHTML = fruit;
    nieuwelement.className = 'rood';
    fruitvak.appendChild(nieuwelement);
}

function zetingroentela(groente){
    console.log(groente);

    const nieuwelement = document.createElement('h3');
    nieuwelement.innerHTML = groente;
    nieuwelement.className = 'groen';
    groentevak.appendChild(nieuwelement);
}

function salade(groente, fruit){
    zetingroentela(groente);
    zetinfruitla(fruit);
}