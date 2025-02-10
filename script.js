/* data user*/

let distance;

do {
    distance = prompt("quanti km vuoi fare?");

    if (distance <= 0) {
        alert("inserito numero non corretto");
    }

} while (distance <= 0);

let age;

do {
    age = Number(prompt("inserisci la tua età"));

    if (age < 6) {
        alert("sei troppo piccolo per viaggiare da solo");

    } else if (age > 100) {
        alert("non sarai un pò troppo grande per i canoni umani????");
    }

} while (age < 6 || age > 100);

/* calculation pince */

let prezzo = distance * 0.21;

console.log(prezzo);

if (age < 18) {

    prezzo -= (prezzo * 0.2);

} else if (age > 65) {

    prezzo -= (prezzo * 0.4);

}

console.log(prezzo.toFixed(2) + "€");