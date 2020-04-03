function transform(numberInputAsInt, mode, aName) {
  var resultsArray = []
  var conditionThree = "Won't you be my neighbor?";
  if (aName !== ""){
    conditionThree = `Won't you be my neighbor, ${aName}?`;
  }


  for (i = 0; i <= numberInputAsInt; i++){
    resultsArray.push(i);
  }
  if (mode === "reverse") {
    resultsArray.reverse();
  }
  
  for (i = 0; i < resultsArray.length; i++) {
    var temparray = (resultsArray[i]).toString().split("");   //convert an entry to string and split it (for more-than-1-digit numbers)
    temparray.sort();                                  //sort the components lowest-to-highest (51 becomes "1" "5")
                                       //holds this index's post-int-check result ("one", "two", "three", or resultsArray[i]; ex: "459")

    for (j = 0; j < temparray.length; j++) {         //loop/switch to perform the above and set the flag ("one", "two", "three", or resultsArray[i]; ex: "459")
      switch (temparray[j]) {
        case "1":
          resultsArray[i] = "Beep!";
          break
        case "2":
          resultsArray[i] = "Boop!";
          break;
        case "3":
          resultsArray[i] = conditionThree;
          break;
      }
    }
  }
  return resultsArray;
}



$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var runMode = $("#mode").val();
    var userName = $("#name").val();
  
    var pendingResults = transform(userInput, runMode, userName);
    $("#publishingBox").text("");
    for (i = 0; i < pendingResults.length; i++){
      $("#publishingBox").append(pendingResults[i] + "<br>");
    }

  
  
  });
});