class Fruit{
    constructor(name,quant,unit){
        this.name = name;
        this.quant = quant;
        this.unit = unit;
        let calcTP = (quant,unit) => {(quant*unit)};
    }
};

Strawberry = new Fruit('Strawberry',15,10);
Pineapple = new Fruit('Pineapple',10,40);
Apple = new Fruit('Apple',6,20);
Mango = new Fruit('Mango',12,50);
Pear = new Fruit('Pear',10,80);

let fruits = [Strawberry.name,Pineapple.name,Apple.name,Mango.name,Pear.name];
let quantity = [Strawberry.qaunt,Pineapple.qaunt,Apple.quant,Mango.quant,Pear.quant];
let unitprice = [Strawberry.unit,Pineapple.unit,Apple.unit,Mango.unit,Pear.unit];


let gt250 = [];
for (let i=0;i<fruits.length;i++){
    
    if(fruits[i].calcTP>=250){
        gt250.push(fruits[i]);
    }
    
}

console.log(gt250);


