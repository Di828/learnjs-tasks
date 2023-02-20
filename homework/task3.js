class Product {    
    name 
    price
    quantity
    description    

    constructor(name, price, quantity, description) {
        this.name = name || "";
        this.price = price;
        this.quantity = quantity || 0;
        this.description = description || 'No description.';
    }

    possibleOperations = {
        'starts' :   (value, condition) => value.toLowerCase().startsWith(condition.toLowerCase()),
        'contains' : (value, condition) => value.toLowerCase().includes(condition.toLowerCase()),
        'ends' :      (value, condition) => value.toLowerCase().endsWith(condition.toLowerCase()),
        '=' : (value, condition) => +value === +condition,
        '>' : (value, condition) => +value > +condition,
        '>=' : (value, condition) => +value >= +condition,
        '<' : (value, condition) => +value < +condition,
        '<=' : (value, condition) => +value <= +condition,
    }
    
    info(){
        return `Name: ${this.name}. Price: ${this.price}. Quantity: ${this.quantity}. Description: ${this.description}`;
    }

    fitsTheConditions(conditions){        
        for (let [property, operation, conditionValue] of conditions){
            if (Object.keys(this).includes(property)){
                if (!this.propertyValueSatisfiesTheCondition(property, operation, conditionValue)){
                    return false;
                }
            }
        }
        
        return true;
    }

    propertyValueSatisfiesTheCondition(property, operation, conditionValue){                
        return this.possibleOperations[operation](this[property], conditionValue);
    }
}

function fitsTheConditions(str, arrOfProducts){
    let result = [];

    let parsedConditions = parseConditions(str);    

    arrOfProducts.forEach(element => {
        if (element.fitsTheConditions(parsedConditions)){
            result.push(element);
        }
    });

    return result;
}

function parseConditions(str){
    let parsedConditions = [];

    let conditions = str.split('&');

    conditions.forEach(element => {
        let condition = element.split('-');

        if (condition.length == 2){
           condition[2] = /\d/.test(condition[1][1]) ? condition[1].slice(1) : condition[1].slice(2);
           condition[1] = condition[1].substring(0, condition[1].length - condition[2].length);
        }

        parsedConditions.push(condition);
    })

    return parsedConditions;
}

module.exports = { Product, fitsTheConditions }