function checkStatus(a, b, c) {
   for (let i = 0; i < checkStatus.length; i++) {
      typeof arguments[i] === "string"
         ? (Name = arguments[i])
         : typeof arguments[i] === "number"
            ? (Age = arguments[i])
            : typeof arguments[i] === "boolean"
               ? arguments[i] === true
                  ? (Status = "You Are Available For Hire")
                  : (Status = "You Are Not Available For Hire")
               : "Insert A Valid Value";
   }
   console.log(`Hello ${Name}, Your Age Is ${Age}, ${Status}`);
}

//  // Needed Output
checkStatus("Osama", 38, true);
checkStatus(38, "Osama", true);
checkStatus(true, 38, "Osama");
checkStatus(false, "Osama", 38);
