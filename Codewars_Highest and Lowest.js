function highAndLow(nums){
  let arrNums = nums.split(' ').map(Number);
  console.log(arrNums);
  
  let min = Math.min(...arrNums);
  let max = Math.max(...arrNums);

  return `${max} ${min}`;
};
