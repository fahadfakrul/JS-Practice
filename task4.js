function password(obj) {
    if(!obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4 || typeof obj.birthYear !== "number") {
        return "invalid";
    }
    const newPassword = obj.siteName.charAt(0).toUpperCase()+obj.siteName.slice(1)+"#"+obj.name+"@"+obj.birthYear;
    return newPassword;
    }
    
    console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))
    console.log(password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" }))
    console.log(password({ name: "toky" , birthYear: 200, siteName: "Facebook" }))
    console.log(password({ name: "maisha" , birthYear: 2002 } ))