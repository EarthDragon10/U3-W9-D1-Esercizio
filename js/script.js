"use strict";
console.log("Ciao");
let player_1 = 4;
let player_2 = 10;
let randomNum = Math.floor((Math.random() * 100) + 1);
const comparePlayerToNum = () => {
    if (player_1 === randomNum && player_2 !== randomNum) {
        console.log("Il giocatore 1 ha azzeccato il numero casuale");
    }
    else if (player_1 !== randomNum && player_2 === randomNum) {
        console.log("Il giocatore 2 ha azzeccato il numero casuale");
    }
    else if (player_1 === randomNum && player_2 === randomNum) {
        console.log("Entrambi i giocatori hanno azzeccato il numero casuale");
    }
    else {
        console.log("Nessuno dei due giocatori ha azzeccato il numero casuale");
        getNumNearRandomNum();
    }
};
const getNumNearRandomNum = () => {
    let diffPlayer_1 = Math.abs(randomNum - player_1);
    let diffPlayer_2 = Math.abs(randomNum - player_2);
    console.log({ diffPlayer_1, diffPlayer_2 });
    diffPlayer_1 > diffPlayer_2 ? console.log("Il giocatore 2 é piú vicino al numero casuale generato") : console.log("Il giocatore 1 é piú vicino al numero casuale generato");
};
console.log({
    player_1,
    player_2,
    randomNum,
});
comparePlayerToNum();
