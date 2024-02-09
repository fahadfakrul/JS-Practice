function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  const income = [];
  for (let amount of arr) {
    if (amount >= 3000) {
      let totalamount = amount - amount * 0.2;
      income.push(totalamount);
    } else {
      income.push(amount);
    }
  }
  let totalincome = 0;
  let totalsavings = 0;
  for (let value of income) {
    totalincome = totalincome + value;
  }
  totalsavings = totalincome - livingCost;
  if(totalsavings >= 0){
    return totalsavings;
  }else{
    return "earn more";
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
