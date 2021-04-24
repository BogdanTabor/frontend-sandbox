let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListReverse(list) { //recursion
  if(list.next) {
    printListReverse(list.next); //take rest of values
  }
  alert(list.value);
}

function printListReverse(list) {//loop
  let arr = []; 
  let tmp = list;
  
  while (tmp) { // make an ordinary arr from list
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) { //alert reverse list
    alert( arr[i] );
  }
}

printListReverse(list);