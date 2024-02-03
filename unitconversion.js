//inch to feet

function inchToFeet(inch){
    const feet = parseInt(inch  / 12);
    const inches= inch % 12;
    const height = feet +' Feet '+ inches+ ' Inch.';
    return height;
}

const aliHeight= inchToFeet(75);
console.log(aliHeight);