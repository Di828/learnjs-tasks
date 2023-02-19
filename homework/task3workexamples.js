const { Product, fitsTheConditions } = require('./task3');

let arrOfProducts = [new Product('Wood', 25, 100, "Wood to build a house."),
                     new Product('Steel', 85, 25, 'Standart steel'),
                     new Product('Iron', 18, 42, 'You need to buy some iron :}'),
                     new Product('Silver', 125, 8, 'Sparkle, Sparkle, Sparkle!'),
                     new Product('Mercury', 100, 15, 'Be carefull with it!!!'),
                     new Product('Super steel', 125, 5, 'Very rare steel')];

let strArray = ['name-contains-e&price->=100&quantity-<15',
                'name-starts-s&name-ends-el',
                'price->25&quantity-<=25',
                'description-contains-steel',
                'price->150',
                ''];

let testNumber = 1;

strArray.forEach(str => {

    let acceptedProducts = fitsTheConditions(str, arrOfProducts);

    showInfo(str, acceptedProducts);
});

function showInfo(str, acceptedProducts){
    console.log(`\n-------- Test ${testNumber} ---------\n`);
    console.log(`Input string : ${str}`);
    console.log(`Quantity of products matching the condition: ${acceptedProducts.length}\n`);
    testNumber++;

    acceptedProducts.forEach(product => {
        console.log(product.info());
    });   
}