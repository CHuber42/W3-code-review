function transform(numberInputAsString) {
  console.log(numberInputAsString)
}



$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var pendingResults = transform(userInput);

  
  
  });
});