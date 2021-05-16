function throttle(func, ms) {
		let isThrottled = false
		let callStack = []
		
		function wrapper(text) {
					if (isThrottled) {
									callStack.push(text)
									return
								}
				isThrottled = true

				func.call(this, text);

				setTimeout(() => {
							isThrottled = false
							if (callStack.length != 0) {
											let temp = callStack.pop()
											callStack = []
											return wrapper(temp)
										}
						}, ms)

				}
		return wrapper
}

function f(a) {
	  console.log(a)
}

// f1000 call f ones in 1000ms
// let f1000 = throttle(f, 1000);
//
// f1000(1); // show 1
// f1000(2);
// f1000(3);
