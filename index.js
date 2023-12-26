const button = document.getElementById('button');

function myKeyPress(e){
  var keynum;

  if(window.event) { // IE                  
    keynum = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera                 
    keynum = e.which;
  }
  console.log('---------keynum-----------');
  console.log(e);
  if(keynum) alert(String.fromCharCode(keynum));
}
button.addEventListener('click',myKeyPress)