// const chooseBestDistance = (t, k, ls) => {

//   //here  will be recursion
// 	let arr = ls;
// 	if (arr.length == k) {
// 		return arr 
// 	} else {
// 		return arr.slice(0, k)
// 	}
	
// 	// } else {
// 	// 	return 
// 	// }
// 	// for (let i = 0; i < ls.length; ++i) {
// 	// 	arr.push(ls[i])
// 	// 	}
// }

const chooseBestDistance = (t, k, ls) => {
	
	bestSum = 0;
	for (i = 0; i < ls.length; i++) {
		for (j = i + 1; j < ls.length; j++) {
			for (k = j + 1; k < ls.length; k++) {
				temp = ls[i] + ls[j] + ls[k]
				if ( temp >= bestSum && temp <= t) {
					bestSum = temp;
				}
			}
		}
	}
	return bestSum;
	return null
}

console.log(chooseBestDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseBestDistance(163, 3, [50])); // null