function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
      }
    const named = name.toLowerCase();
   const lastCharacter = named[name.length - 1];
    if (
        lastCharacter === "a" ||
        lastCharacter === "y" ||
        lastCharacter === "i" ||
        lastCharacter === "e" ||
        lastCharacter === "o" ||
        lastCharacter === "u" ||
        lastCharacter === "w"
      ) {
        return "Good Name";
      } else {
        return "Bad Name";
      }
  }
  
 


console.log(checkName(["Rashed"]));
console.log(checkName(199));
console.log(checkName('RAFEE'));
console.log(checkName('Salman'));
