//Создайте new Accumulator

function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt('Enter number', 0);
    }
}