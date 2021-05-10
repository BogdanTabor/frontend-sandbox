function f(x) {
  alert(x);
}

function delay(f, ms) {
	return function(...args) {
		let savedThis = this; //intermediate var
		setTimeout(function() {
			f.apply(savedThis, args)
		}, ms);
	};
}

function delay(f, ms) { //with arrow function
	return function() {
		setTimeout(() => f.apply(this, arguments), ms);
	}
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");