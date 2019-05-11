let numberOfVowels = function(data) {
  var num = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i] == "a" || data[i] == "e" || data[i] == "i" || data[i] == "o" || data[i] == "u") {
      num++;
    }
  }
  return num;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));