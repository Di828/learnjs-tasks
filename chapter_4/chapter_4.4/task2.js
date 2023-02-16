//Создайте калькулятор

let calculator = {
    read() {
        this.a = +prompt('Enter number', '');
        this.b = +prompt('Enter number', '');
    } ,
    
    sum() {
        return this.a + this.b;
    } ,

    mul() {
        return this.a * this.b;
    },
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());