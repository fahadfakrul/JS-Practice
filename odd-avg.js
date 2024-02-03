function oddAvg(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count=odds.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}

const numbers = [42, 13, 58, 65, 81];
const avg = oddAvg(numbers);
console.log("Average of the odd numbers are: ", avg);
