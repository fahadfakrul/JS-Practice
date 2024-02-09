function calculateMoney(ticketSale) {
  if (ticketSale >= 0) {
    const expense = 500 + 8 * 50;
    const left = ticketSale * 120 - expense;
    return left;
  } else {
    return "Please provide a positive number.";
  }
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
