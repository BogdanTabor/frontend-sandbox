const chooseBestDistance = (t, k, ls) => {
	let sum = 0, tempSum = 0;

	if (ls.length >= 1 && t >= 0 && k >= 1) {
		function* generateCombinations(arr, size) {
			function* doGenerateCombinations(offset, combo) {
				if (combo.length == size) {
					yield combo;
				} else {
					for (let i = offset; i < arr.length; i++) {
						yield* doGenerateCombinations(i + 1, combo.concat(arr[i]));
					}
				}
			}
			yield* doGenerateCombinations(0, []);
		}

	for (let combo of generateCombinations(ls, k)) {
		for (i = 0; i < combo.length; i++) {
			tempSum += combo[i]
			if (tempSum > sum && tempSum < t) {
				sum = tempSum;
				tempSum = 0;
			}
		}
	}
	return sum
	} else {
	return null
	}
}

chooseBestDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseBestDistance(163, 3, []); // null


const chooseBestDistance = (t, k, ls) => { //chooseBestDistance for 3 iteration
	sum = 0;
	for (i = 0; i < ls.length; i++) {
		for (j = i + 1; j < ls.length; j++) {
			for (k = j + 1; k < ls.length; k++) {
				temp = ls[i] + ls[j] + ls[k]
				if ( temp >= sum && temp <= t) {
					sum = temp;
				}
			}
		}
	}
	return sum
	return null
}

console.log(chooseBestDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseBestDistance(163, 3, [50])); // null