const chooseBestDistance = (t, k, ls) => {

  //here  will be recursion
	let arr = ls;
	if (arr.length == k) {
		return arr 
	} else {
		return arr.slice(0, k)
	}
	
	// } else {
	// 	return 
	// }
	// for (let i = 0; i < ls.length; ++i) {
	// 	arr.push(ls[i])
	// 	}
}

chooseBestDistance(174, 3, [51, 56, 58, 59, 61]); //173
// chooseBestDistance(163, 3, [50]); // null

// const bestDistanceFromMaxic = (t, k, ls) => {
//     listOfSums = [];
//     for (i = 0; i < ls.length; i++){
//     	for (z = i+1; z < ls.length; z++){
//       	for (f = z+1; f < ls.length; f++){
//         	listOfSums.push([ls[i], ls[z], ls[f]]);
//       }
//     }
//   }
// 	return listOfSums
// }

// bestDistanceFromMaxic(174, 3, [51, 56, 58, 59, 61])
//ty tut?
