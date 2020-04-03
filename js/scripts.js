function transform(numberInputAsInt) {
  var range = []
  console.log(numberInputAsInt)
  for (i = 0; i <= numberInputAsInt; i++){
    range.push(i);
  }
  
  for (i = 0; i < range.length; i++) {
    var temparray = (range[i]).toString().split("");   //convert an entry to string and split it (for more-than-1-digit numbers)
    temparray.sort();                                  //sort the components lowest-to-highest (51 becomes "1" "5")
    var flagResult = ""                                    //holds this index's post-int-check result ("one", "two", "three", or range[i]; ex: "459")

    for (j = 0; j < temparray.length; j++) {         //loop/switch to perform the above and set the flag ("one", "two", "three", or range[i]; ex: "459")
      switch (temparray[j]) {
        case "1":
          flagResult = "one";
          break
        case "2":
          flagResult = "two";
          break;
        case "3":
          flagResult = "three";
          break;
        default:
          if (flagFilter === ""){                   //Don't set the "non-"1""2""3"" flag unless "1""2""3" flag has not been set
            flagResult = range[i].toString();
          }
          break;
      }

    }




  
    }

  

}



$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var pendingResults = transform(userInput);

  
  
  });
});