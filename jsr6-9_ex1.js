function work(a, b) {
  alert( a + b );
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

function spy(func) {
	function wrapper(...args){
		wrapper.calls.push(args); //save all arguments in own array
		return func.apply(this, arguments); //forward call
	}
	wrapper.calls = [];
	return wrapper;
}