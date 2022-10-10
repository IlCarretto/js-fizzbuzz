// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Lorem” al posto del numero e per i multipli di 5 stampi “Ipsum”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “LoremIpsum”.

const row = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    // memorizzo il numero
    let iResult = "";
    // SE numero è multiplo di 3 e 5, memorizzo fizzbuzz;
    if (i % 3 === 0 && i % 5 === 0) {
        iResult = "LoremIpsum";
        // ALTRIMENTI SE numero è multiplo di 3, memorizzo fizz;
    } else if (i % 3 === 0) {
        iResult = "Lorem";
        // ALTRIMENTI SE numero è multiplo di 5, memorizzo buzz;
    } else if (i % 5 === 0 ) {
        iResult = "Ipsum";
    } else {
        // ALTRIMENTI memorizzo numero;
        iResult = i;
    }
    console.log(iResult);
    // Inner HTML
    const col = `<div class="col">${iResult}</div>`
    row.innerHTML += col;
}