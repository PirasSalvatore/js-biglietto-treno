
const today = new Date();

console.log(today); // oggi

const hour = today.getHours();

const minute = today.getMinutes();

const missing = 60 - minute;

alert(`sono le ore ${hour}:${minute} | mancano ${missing} minute alle ${(hour + 1) % 24}`);
