function transform(numberInputAsInt) {
  var range = []
  console.log(numberInputAsInt)
  for (i = 0; i <= numberInputAsInt; i++){
    range.push(i);
  }

  for (i = 0; i < range.length; i++) {
    var temparray = (range[i]).toString().split("");
    console.log(temparray)
  }

  

}



$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var pendingResults = transform(userInput);

  
  
  });
});