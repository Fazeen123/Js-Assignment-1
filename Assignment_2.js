function getPrice(taxBoolean){
    let dishData=[{name:"Burger",price:200},{name:"Wraps" ,price:300},{name:"Pizza" ,price:450},{name:"Fried Rice" ,price:400}];
    for(let i=0; i<dishData.length;i++){
        let finalPrice;
        let tax=1.22;
        if(taxBoolean===true){
            finalPrice=dishData[i].price*tax;
        }else if(taxBoolean===false){
            finalPrice=dishData[i].price;
        }else{
            console.log("You need to pass a boolean to the getPrices call !");
        }
        console.log("Dish: "+dishData[i].name+"  Price: $"+finalPrice);
        
    }
}

function getDiscount(taxBoolean,guests){
    getPrice(taxBoolean);
    let Guests=guests;
    if(Guests>0 && Guests<30){
       let discount=0;
       if(Guests<5){
        discount=5;
       }else if(Guests>=5){
        discount=10;
       }
       console.log("Discount is: $"+discount);
    }else{
        console.log("The second argument Must be a number between 0 and 30.");
    }
}

//Reciept when taxBoolen:false
console.log("This is tax free price rate")
getDiscount(false,2)

//Reciept when taxBoolen:true

console.log("This is with tax price rate")
getDiscount(true,3);
getDiscount(true,11);
getDiscount(true,55);

getDiscount();
