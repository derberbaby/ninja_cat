$(document).ready(function() {

  for(var i = 0; i < 5; i++) {
    $('body').append('<img src="cat'+i+'.png" src2="ninja'+i+'.png">');
  }

  $('img').click(function() {
    var temp = $(this).attr('src');
    var temp2 = $(this).attr('src2');
    $(this).attr('src', temp2);
    $(this).attr('src2', temp);
  })

})
