//Rewriting our for loop into a gift wrapping

function writeCards(names, eventName) {
  let cards = []
  for (const name of names){
    cards.push(`Thank you, ${name}, for the wonderful ${eventName} gift!`)
  }
  return cards
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