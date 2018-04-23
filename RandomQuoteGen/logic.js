$(document).ready(function() {
  $.getJSON("https://talaikis.com/api/quotes/random/", function(data) {
    $("#quote").html(JSON.stringify(data.quote));
    $("#author").html("- " + JSON.stringify(data.author));
  });
  
  $("#new").click(function() {
    $.getJSON("https://talaikis.com/api/quotes/random/", function(data) {
         $("#quote").html(JSON.stringify(data.quote));
         $("#author").html("- " + JSON.stringify(data.author));
     });
  });
});
