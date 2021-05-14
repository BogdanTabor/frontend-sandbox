function debounce(f, ms) {
	let isCooldown = false;
	
	return function() {
	if (isCooldown) return;
	f.apply(this, arguments);
	isCooldown = true;
	setTimeout(() => isCooldown = false, ms)
	};
}

let f = debounce(alert, 1000);

f(1); // run immediately
f(2); // ignored

setTimeout( () => f(3), 100); // ignored (pass just 100 ms)
setTimeout( () => f(4), 1100); // runnig
setTimeout( () => f(5), 1500); // ignored (pass just 400 ms after last call)