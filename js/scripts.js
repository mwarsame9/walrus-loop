$(document).ready(function(){
  $("#formOne").submit(function(e) {

    var person1Input = $("#person1").val();
    var person2Input = $("#person2").val();
    var animalInput = $("#animal").val();
    var exclamationInput = $("#exclamation").val();
    var verbInput = $("#verb").val();
    var nounInput = $("#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
    e.preventDefault();
  });

});
