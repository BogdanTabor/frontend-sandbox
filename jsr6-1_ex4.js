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

function printList(list) { //while loop
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}

function printList(list) { //recursion
  alert(list.value);
  if (list.next) {
    printList(list.next);
  }
}

printList(list);