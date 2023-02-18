class Product {    
    name 
    price
    quantity
    description
    #possibleStringConditions = ['name', 'description'];

    constructor(name, price, quantity, description) {
        this.name = name || "";
        this.price = price;
        this.quantity = quantity || 0;
        this.description = description || 'No description.';
    }    

    fitsTheConditions(conditions){        
        for (let condition of conditions){
            if (this.#possibleStringConditions.includes(condition[0])){
                if (!this.checkStringsData(condition)){
                    return false;
                }
            }
        }    
        
        return true;
    }

    info(){
        return `Name: ${this.name}. Price: ${this.price}. Quantity: ${this.quantity}. Description: ${this.description}`;
    }

    checkStringsData(condition){
        let value;

        if (condition[0].toLowerCase() === 'name'){
            value = this.name.toLowerCase();
        }
        if (condition[0].toLowerCase() === 'description'){
            value = this.description.toLowerCase();
        } 

        switch (condition[1]){
            case 'contains':
                if (!value.includes(condition[2].toLowerCase())){
                    return false;
                }                        
                break;
            case 'starts':
                    if (!value.startsWith(condition[2].toLowerCase())){
                        return false;
                    }                        
                    break;
            case 'ends':
                    if (!value.endsWith(condition[2].toLowerCase())){
                        return false;
                    }                        
                    break;
            default :
                return false;
        }

        return true;
    }
}

let arrOfProducts = [new Product('Wood', 25, 100, "Wood to build a house."),
                     new Product('Steel', 85, 25),
                     new Product('Iron', 18, 42, 'You need to buy some iron :}'),
                     new Product('Silver', 125, 8, 'Sparkle, Sparkle, Sparkle!'),
                     new Product('Mercury', 100, 15, 'Be carefull with it!!!')]

let str = 'name-contains-o&quantity-=5';

let acceptedProducts = fitsTheConditions(str);
acceptedProducts.forEach(product => {
    console.log(product.info());
})

function fitsTheConditions(str){
    let parsedConditions = [];

    let conditions = str.split('&');
    conditions.forEach(element => {
        let condition = element.split('-');
        parsedConditions.push(condition);
    })
    
    let result = [];

    arrOfProducts.forEach(element => {
        if (element.fitsTheConditions(parsedConditions)){
            result.push(element);
        }
    });

    return result;
}