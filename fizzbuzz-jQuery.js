/* fizzbuzz-jQuery.js */

$(document).ready(function() {
  var toPost = '', fizz, buzz;
  for (var i=1; i<=100; i++) {
    fizz = (i%3 === 0)?'Fizz':'';
    buzz = (i%5 === 0)?'Buzz':'';
    console.log(fizz, buzz);
    if (!(fizz || buzz)) {
      toPost = i.toString();
    } else {
      toPost = fizz + buzz;
    }
    $('body').append('<p>' + toPost + '</p>');
  }
  $('body').append('<p>Done with jQuery version - Have a nice day!</p>');
});
