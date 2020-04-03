function transform(numberInputAsInt) {
  var range = []

  for (i = 0; i <= numberInputAsInt; i++){
    range.push(i);
  }
  
  for (i = 0; i < range.length; i++) {
    var temparray = (range[i]).toString().split("");   //convert an entry to string and split it (for more-than-1-digit numbers)
    temparray.sort();                                  //sort the components lowest-to-highest (51 becomes "1" "5")
                                       //holds this index's post-int-check result ("one", "two", "three", or range[i]; ex: "459")

    for (j = 0; j < temparray.length; j++) {         //loop/switch to perform the above and set the flag ("one", "two", "three", or range[i]; ex: "459")
      switch (temparray[j]) {
        case "1":
          range[i] = "Beep!";
          break
        case "2":
          range[i] = "Boop!";
          break;
        case "3":
          range[i] = "Won't you be my neighbor?";
          break;
      }

    }
     
  }
  
console.log(range)
  

}



$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var pendingResults = transform(userInput);

  
  
  });
});