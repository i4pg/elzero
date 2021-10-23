function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100) {
        console.log("Age Out Of Range");
    } else {
        console.log(`${theAge * 12} Months`);
        console.log(`${theAge * 52.1429} Weeks`);
        console.log(`${theAge * 365} Days`);
        console.log(`${theAge * 8760} Minutes`);
        console.log(`${theAge * 525600} Hours`);
        console.log(`${theAge * 3.154e+7} seconds`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months