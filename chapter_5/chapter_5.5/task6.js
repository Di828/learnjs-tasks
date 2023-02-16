//Создать расширяемый калькулятор

let calculator = new Calculator();

calculator.addMethod('*',(a, b) => a * b);
calculator.addMethod("/", (a, b) => a / b);
calculator.addMethod("**", (a, b) => a ** b);

console.log(calculator.calculate('20 * 10'));
console.log(calculator.calculate('20 / 10'));
console.log(calculator.calculate('2 ** 10'));

function Calculator(){
    this.methods = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
    }

    this.calculate = (str) => {
        elements = str.split(' ');
        a = +elements[0];
        b = +elements[2];
        operation = elements[1];

        if (!this.methods[operation] || isNaN(a) || isNaN(b)) {
            return NaN;
          }

        return (this.methods[operation](a, b));
    }

    this.addMethod = (name, func) => {
        this.methods[name] = func;
    }
}