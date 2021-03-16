
// You should implement your task here.

module.exports = function towelSort (matrix) {

if(matrix === undefined || matrix.length < 0 ){
  return[];
}

const sortedArr = matrix.reduce((total, amount, index) => {
  if(index % 2 !== 0 ) matrix[index].reverse();
  return total.concat(amount);
}, []);

  return sortedArr;
}
