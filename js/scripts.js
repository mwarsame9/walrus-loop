jQuery(document).ready(function() {

  var spots = ['h1', 'p', 'img'];
  spots.forEach(function(spot) {
    $(spot).click(function() {
    alert("THis is a " + spot);
  });
});

  // event.preventDefault();
  // jQuery("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // jQuery("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // jQuery("img, h1, p").click(function() {
  //   alert("This is an " + $(this).prop('tagName'));
  // });
  // alertBinder("message");
  // var function = alertBinder(spot) {
  //     alert("this is an " + spot);
  // }
  // spots.forEach(function(spot) {
  //   $(spot).click(alertBinder(spot));
  // });
});
