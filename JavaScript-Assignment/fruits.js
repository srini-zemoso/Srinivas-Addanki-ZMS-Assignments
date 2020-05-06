const sb = document.querySelector('#Strawberry');
const pin = document.querySelector('#Pineapple');
const app = document.querySelector('#Apple');
const man = document.querySelector('#Mango');
const per = document.querySelector('#Pear');
const fruitlist = document.querySelector('ul');


var fruits = ["Strawberry","Pineapple","Apple","Mango","Pear"];
var quantity = [15,10,6,12,10];
var unitprice = [10,40,20,50,80];
var totalprice = [];
var gt250 = [];
for (var i=0;i<fruits.length;i++){
    totalprice[i]=quantity[i]*unitprice[i];
    
}

sb.textContent = totalprice[0];
pin.textContent = totalprice[1];
app.textContent = totalprice[2];
man.textContent = totalprice[3];
per.textContent = totalprice[4];

for(var x = 0;x<fruits.length;x++){
    fruits[x] = {"name":fruits[x],"quantity":quantity[x],"unitprice":unitprice[x],"total":totalprice[x]};
    if(fruits[x].total>=250){
        gt250.push(fruits[x].name);
    }
}

fruitlist.innerHTML = '';
for (var y=0;y<gt250.length;y++){
    const fruitnames = document.createElement('li');
    fruitnames.textContent = gt250[y];
    fruitlist.append(fruitnames); 
}


