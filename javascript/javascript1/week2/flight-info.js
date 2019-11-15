function getFullName (fullName, isFormalName) { 
    if (fullName === "") {
            console.log("Please insert name")
    } else {
       if  (isFormalName) {
        console.log( "Lord" + " " + fullName.firstName + " " + fullName.surname);
    }  else {   
    console.log(fullName.firstName + " " + fullName.surname);
    }  
}
}

let passanger1 = {firstName : "Thon", surname: "Mai"};
let passanger2 = {firstName : "Moon", surname: "Sailor"};  
getFullName(passanger1, true);
getFullName(passanger2, false);
getFullName('');

