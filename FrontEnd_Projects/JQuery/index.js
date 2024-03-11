$('h1').css('color','white' );
$('h1').addClass('margin-50');



$('button').click(function() {
    $('h1').css('color','brown')
})

$("textarea").keypress(function(event){
  var pressedkey = event.key;
  console.log(pressedkey);

  $("h1").text(pressedkey)
})
