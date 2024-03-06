// filter each element based on a condition and return a new array with only one  element that pass the condition.

const players = [23, 24, 25, 26, 27, 28];
const selectedPlayers = players.find(p => p > 25);
console.log(selectedPlayers);