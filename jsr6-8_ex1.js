function printNumbers(from, to) {//recursive setTimeout
  let current = from;
  
  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}


function printNumbers(from, to) {//setInterval
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if(current==to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}


printNumbers(1, 5);