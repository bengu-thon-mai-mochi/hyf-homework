const passenger1 = { firstName: "Thon", surname: "Mai" };
const passenger2 = { firstName: "Moon", surname: "Sailor" };

function getFullName(fullName, isFormalName) {
  if (fullName === "") {
    console.log("Please insert name");
  } else {
    if (isFormalName) {
      console.log(`Lord ${fullName.firstName} ${fullName.surname}`);
    } else {
      console.log(`${fullName.firstName} ${fullName.surname}`);
    }
  }
}

getFullName(passenger1, true);
getFullName(passenger2, false);
getFullName("");

