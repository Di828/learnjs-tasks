//Цепь вызовов

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      alert( this.step );
      return this;
    }
  };

  ladder.up().showStep().up().showStep().down().showStep().down().showStep();