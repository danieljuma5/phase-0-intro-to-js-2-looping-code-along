//Rewriting our for loop into a gift wrapping

function writeCards(names,eventName) {
  let messagesArray = [];
  for (let i = names.length - 1; i >= 0; i--) {
  
  messagesArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
}
console.log(messagesArray);
}

const attendees = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise";
const result = writeCards(["Guadalupe", "Ollie", "Aki"],"surprise");


//countdown function
function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}