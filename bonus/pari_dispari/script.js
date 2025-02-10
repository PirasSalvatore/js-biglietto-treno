
/* user data */

const userChoise = prompt("vuoi pari o dispari?");

const userNumber = Number(prompt("Numero tra 0 e 9"));

/* random generations */

const aiNumber = Math.floor(Math.random() * 9) + 1;

console.log(userChoise + " " + userNumber + " " + aiNumber);

/* azioni */

if (!((userNumber + aiNumber) % 2) && (userChoise == "pari")) {

    console.log("somma pari");
    alert("hai vinto");

} else if (((userNumber + aiNumber) % 2) && (userChoise == "dispari")) {

    console.log("somma dispari");
    alert("hai vinto");

} else {
    console.log("somma indiferente sei un perdente <3");
    alert("hai perso");
}
