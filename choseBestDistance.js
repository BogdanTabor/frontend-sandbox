// const chooseBestDistance = (t, k, ls) => {
// // t (максимальна сума відстаней, int >= 0)
// // k (кількість міст, які потрібно відвідати, k >= 1)
// // ls (список відстаней int >= 0 && містить принаймні один елемент)
// // return bestSum, найбільшу суму k відстаней, <= t (якщо існує) : null

// 	let sum = 0;
// 	if (ls.length >= 1 && t >= 0 && k >= 1) {
// 		//make subArr
		
// 			for (let elem of ls) {
// 					let tempSum = 0
// 					tempSum += elem
// 					if (tempSum > sum) {
// 						sum = tempSum
// 					}
// 			}
// 		return sum
// 	} else {
// 	return null
// 	}
// }

// chooseBestDistance(174, 3, [51, 56, 58, 59, 61]); //173

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

for (let combo of generateCombinations([1, 2, 3, 4, 5], 2)) {
  console.log(JSON.stringify(combo));
}


// const chooseBestDistance = (t, k, ls) => {
// 	sum = 0;
// 	for (i = 0; i < ls.length; i++) {
// 		for (j = i + 1; j < ls.length; j++) {
// 			for (k = j + 1; k < ls.length; k++) {
// 				temp = ls[i] + ls[j] + ls[k]
// 				if ( temp >= sum && temp <= t) {
// 					sum = temp;
// 				}
// 			}
// 		}
// 	}
// 	return sum
// 	return null
// }

// console.log(chooseBestDistance(174, 3, [51, 56, 58, 59, 61])); //173
// console.log(chooseBestDistance(163, 3, [50])); // null