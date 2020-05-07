class Fruit{
    constructor(name,quant,unit){
        this.name = name;
        this.quant = quant;
        this.unit = unit;
        }
        
    }


Strawberry = new Fruit('Strawberry',15,10);
Pineapple = new Fruit('Pineapple',10,40);
Apple = new Fruit('Apple',6,20);
Mango = new Fruit('Mango',12,50);
Pear = new Fruit('Pear',10,80);

const fruits = [Strawberry,Pineapple,Apple,Mango,Pear];

let calcPrice = () => {
    for(let fruit of fruits){
        const price = fruit.quant*fruit.unit;
        if(price>250){
            console.log(fruit.name);
        }
    }
}

calcPrice(fruits);


