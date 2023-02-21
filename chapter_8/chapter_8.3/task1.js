//Добавить функциям метод "f.defer(ms)"
Function.prototype.defer = function(ms) {setTimeout(this, ms)}

function f() {
    console.log("Hello!");
  }

function x() {
    console.log("GoodBye");
}

f.defer(1000);
x.defer(1500);