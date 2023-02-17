// Object Constructor:

// 1. Object Constructor
var object = new Object();
// <- {}

// 2. Object create method
var object = Object.create(null);
console.log(object);
// <- {}

// 3. Object Literal
var object = {
  name: "Sudheer",
  age: 34,
};

// ** Object literal property values can be of any data type, including array, function, and nested object.

// 4. function Constructor
function Person(name) {
  this.name = name;
  this.age = 21;
}

var object = new Person("Peareson");

// 5. Function constructor with prototype:
function Person() {}
Person.prototype.name = "Peareson";
var object = new Person();

// 6.ES6 Class syntax:
class Person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Peareson");

// 7. Singleton pattern:
var object = new (function () {
  this.name = "Peareson";
})();
