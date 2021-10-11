/*(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "Hi ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);
function greeting(person) {
  //var yakovGreeter = {};
  //yakovGreeter.name = "Yaakov";
  /*var speakWord = "Hello ";*/
  //var yakov = "Hello"
  //yakovGreeter.sayHello = function (Yaakov) {
  	function greeting(person) {
    console.log('Hello '  +  person);
  }

  greeting('Manuel');
  greeting(' Andres');



