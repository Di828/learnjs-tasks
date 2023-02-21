// Улучшенные часы
const { Clock } = require('../chapter_9.1/task1');

class ExtendedClock extends Clock{
    constructor(template, precision = 1000){
        super(template);
        this.precision = precision;
    }

    start(){
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let clock = new ExtendedClock('h:m:s', 2000);
clock.start();