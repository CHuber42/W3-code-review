function transform(numberInputAsInt, mode, aName) {
  var resultsArray = []                                             //Create array to hold results
  var conditionThree = "Won't you be my neighbor?";                 //Set the base case for '3's present in result'
  if (aName !== ""){
    conditionThree = `Won't you be my neighbor, ${aName}?`;         //If name was input, update/change '3's present in result' output
  }


  for (i = 0; i <= numberInputAsInt; i++){
    resultsArray.push(i);                                           //Populate the array with all numbers between 0 and user's input
  }
  if (mode === "reverse") {                                         //if in reverse mode, reverse the array
    resultsArray.reverse();
  }
  
  for (i = 0; i < resultsArray.length; i++) {
    var temparray = (resultsArray[i]).toString().split("");         //convert an entry to string and split it (for more-than-1-digit numbers)
    temparray.sort();                                               //sort the components lowest-to-highest ([5, 1] => [1, 5] | [3, 9, 1] => [1, 3, 9])
                                       

    for (j = 0; j < temparray.length; j++) {                         //loop/switch over the individual digits of this input (held in temparray)
      switch (temparray[j]) {
        case "1":
          resultsArray[i] = "Beep!";                                 //if "1" is found, replace index with "Beep!"
          break
        case "2":
          resultsArray[i] = "Boop!";                                 //if "2" is found, replace index with "Boop!" | BECAUSE OF LINE 18, this overwrites case "1"
          break;
        case "3":
          resultsArray[i] = conditionThree;                          //if "3" is found, replace index with (depends on if name present) | 
          break;                                                     // + BECAUSE OF LINE 18, this overwrites cases 1 and 2
      }
    }
  }
  return resultsArray;                                               //Return updated array to caller
}



$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input").val());                    //Collect int to build range - input
    var runMode = $("#mode").val();                                 //Collect if normal or reverse results
    var userName = $("#name").val();                                //Collect username input (blank is acceptable)
  
    var pendingResults = transform(userInput, runMode, userName);   //Pass inputs to backend function | store returned results
    $("#publishingBox").text("");                                   //Reset/wipe the results box in case this is not the first submit
    for (i = 0; i < pendingResults.length; i++){                    
      $("#publishingBox").append(pendingResults[i] + "<br>");       //Publish results to div
    }
  });
});