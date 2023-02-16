// Создайте калькулятор при помощи конструктора, new Calculator

function Calculator() {
    this.read = function() {
      this.a = +prompt('Enter number', 0);
      this.b = +prompt('Enter number', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }