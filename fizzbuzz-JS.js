/* fizzbuzz-JS.js */

function fizzbuzz() {
  var toPost = '', fizz, buzz, p;
  for (var i=1; i<=100; i++) {
    fizz = (i%3 === 0)?'Fizz':'';
    buzz = (i%5 === 0)?'Buzz':'';
    console.log(fizz, buzz);
    if (!(fizz || buzz)) {
      toPost = i.toString();
    } else {
      toPost = fizz + buzz;
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
    // Create a new paragraph element, and append it to the end of the document body
    p = document.createElement('p');
    p.innerHTML = toPost;
    document.body.appendChild(p);
  }
  p = document.createElement('p');
  p.innerHTML = 'Done with JS only version - Have a nice day!';
  document.body.appendChild(p);
} // end function fizzbuzz()