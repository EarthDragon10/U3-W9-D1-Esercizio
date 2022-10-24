console.log("Ciao")

let player_1: number = 4;
let player_2: number = 10;
let randomNum: number = Math.floor((Math.random() * 100) + 1);

const getNumPlayer_1 = () => {
    let inputPlayer_1 = document.querySelector("#player_1") as HTMLInputElement | null;
    let numPlayer_1: number = Number(inputPlayer_1?.value);
}

const comparePlayerToNum: () => void = () => {
    if (player_1 === randomNum && player_2 !== randomNum) {
        console.log("Il giocatore 1 ha azzeccato il numero casuale")
    } else if (player_1 !== randomNum && player_2 === randomNum) {
        console.log("Il giocatore 2 ha azzeccato il numero casuale")
    } else if (player_1 === randomNum && player_2 === randomNum) {
        console.log("Entrambi i giocatori hanno azzeccato il numero casuale")
    } else {
        console.log("Nessuno dei due giocatori ha azzeccato il numero casuale")
        getNumNearRandomNum();
    }
}

const getNumNearRandomNum: () => void = () => {
    let diffPlayer_1: number = Math.abs(randomNum - player_1);
    let diffPlayer_2: number = Math.abs(randomNum - player_2);

    console.log({ diffPlayer_1, diffPlayer_2 })
    diffPlayer_1 > diffPlayer_2 ? console.log("Il giocatore 2 é piú vicino al numero casuale generato") : console.log("Il giocatore 1 é piú vicino al numero casuale generato")
}

console.log({
    player_1,
    player_2,
    randomNum,
})

comparePlayerToNum();