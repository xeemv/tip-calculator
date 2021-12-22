const amount = document.getElementById("amount");
  const guests = document.getElementById("guests");
  const quality = document.getElementById("quality");
  const tipAmount = document.getElementById("tip-amount");

calculate = () => { //using arrow function
  const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2); // .toFixed(2) = return only 2 decimal places
  if(tip === "NaN"){ // if not a number (NaN) then display $0 tip 
    tipAmount.innerHTML = "Tip $0 each";
    showTipAmount();
  }
  else{
    tipAmount.innerHTML = "Tip $" + tip + " each";
    showTipAmount(); // if input fields are filled out correctly, this will display the amount each person owes.
  }
}

showTipAmount = () => {
  // Get the snackbar DIV
  var x = document.getElementById("tip-amount");
  // Add the "show" class to DIV
  x.className = "show";
  // After 5 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000); /* tutorial has 3000milliseconds but I changed mine to 5000 milliseconds   */
}
/* 
- { x.className = x.className.replace("show", "") will replaced show w/ an empty string
- do not include a comma in the dollar amount.
- can use a period for cents.
-3000 milliseconds = 3 secs
*/
