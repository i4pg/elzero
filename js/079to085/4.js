let myFavGames = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
            one: "Immortal Throne",
            two: "Ragnarök",
            three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
            one: "Oath in Felghana",
            two: "Ark Of Napishtim",
            three: "origin",
        },
        price: 40,
    },
};

// Code One => How To Get Object Length ?
// By simply use "Object.keys" to get the properties name and then counts its length
let objectLength = Object.keys(myFavGames).length;
for (let i = 0; i < objectLength; i++) {
    // To loop through Object values
    console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`); // properties name
    console.log(`The Publisher Is ${Object.values(myFavGames)[i].publisher}`); // a selected value of the properties
    console.log(`The Price Is ${Object.values(myFavGames)[i].price}`); // a selected value of the properties
    if (Object.values(myFavGames)[i].hasOwnProperty("bestThree")) {
        // Check If Nested Object Has Property (bestThree)
        console.log("- Game Has Releases");
        console.log(`First => ${Object.values(myFavGames)[i].bestThree.one}`);
        console.log(`Second => ${Object.values(myFavGames)[i].bestThree.two}`);
        console.log(`Third => ${Object.values(myFavGames)[i].bestThree.three}`);
        // Print the releases One by One
    }
    console.log("#".repeat(20));
}
