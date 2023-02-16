// Умножаем все числовые свойства на 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);

  for (let key in menu){
    console.log(menu[key]);
  }

function multiplyNumeric(menu){
  for (let key in menu){
    if (typeof menu[key] == "number"){
        menu[key] *= 2;
    }
  }
}