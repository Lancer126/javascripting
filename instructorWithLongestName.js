const instructorWithLongestName = function(instructors) {
  var longName = instructors[0];
  for (var i = 1; i < instructors.length; i++) {
    if (instructors[i].name.length > longName.name.length) {
      longName = instructors[i];
    }
  }
  return longName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));