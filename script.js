$(document).ready(function(){
    $( "#all" ).click(function() {
        $( ".nature, .space, .urban" ).removeClass('hide');
      });

    $( "#nature" ).click(function() {
        $( ".nature" ).removeClass('hide');
        $( ".space, .urban" ).addClass('hide');
      });

      $( "#space" ).click(function() {
        $( ".space" ).removeClass('hide');
        $( ".nature, .urban" ).addClass('hide');
      });

      $( "#urban" ).click(function() {
        $( ".urban" ).removeClass('hide');
        $( ".nature, .space" ).addClass('hide');
      });
});