let tab = [4, 5, 6, 9, 3];

function returnNr1() {
    console.log(tab[0])
}

function returnNr2(tab) {
    let firtsNumber = console.log(tab[0]);
    return firtsNumber;
}


returnNr1();
returnNr2(tab);