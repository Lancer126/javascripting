const urlEncode = function(text) {
  var newText = text;
  for (var i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      newText = newText.replace(text[i], '%20');
    }
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));