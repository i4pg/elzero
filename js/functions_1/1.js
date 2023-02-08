function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    zName = getDetails.arguments[0];
    let split = zName.split(" ", 2);
    return `Hello ${split[0]} ${split[1].substr(0, 1).toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    zAge = getDetails.arguments[1];
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    zCountry = getDetails.arguments[2];
    return `You Live In ${zCountry.substr(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    return `${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`;
  }
  return fullDetails();
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));