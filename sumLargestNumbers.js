var big1;
var big2;

function sumLargestNumbers(array){
  big1 = array[0];
  big2 = array[1];
  for (var i = 2; i < array.length; i++) {
    if (array[i] > big1) {
      if (array[i] > big2) {
        if (big1 > big2) {
          big2 = array[i];
        }
        else {
          big1 = array[i];
        }
      }
      else {
        big1 = array[i];
      }
    }
    else if (array[i] > big2) {
      big2 = array[i];
    }
  }
  return big1 + big2
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));