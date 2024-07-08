// function X(){

//     var a=99;
//     function Y(){
//         console.log(a);
//     }
//     return Y;
// }
// var b=X();
// console.log(b);
// b()

// function X(){
    
//     for(var i=1;i<=5;i++){
//         function s(x){
//             setTimeout(function (){
//                 console.log(x);
//             }, i*1000)
//         }
//         s(i);    
//     }
    
// }
// X();

// function X(para){
//     console.log("Its for Callback function.");
//     para();
// }
// X(function Y(){
//     console.log("I'm the Y Callback.")
// });

/*
const radius=[10,12,15,21,30];

let task = function (r){
    const output =[];
    for(var i=0;i<r.length;i++){
        output.push(Math.PI*r[i]*r[i]);
    }
    return output;
}

let task1 = function (r){
    const output=[];
    for(var i=0;i<r.length;i++){
        output.push(2*Math.PI*r[i]);
    }
    return output;
}

let task2 = function (r){
    const output=[];
    for(var i=0;i<r.length;i++){
        output.push(2*r[i]);
    }
    return output;
}

console.log(Math.PI);
console.log("Area : ");
console.log(task(radius));
console.log("Surcumference : ");
console.log(task1(radius));
console.log("Diameter : ");
console.log(task2(radius));

*/

const radius = [10,20,39,40,60];
let calculate = function (r, logic){
    const output=[];
    for(var i=0;i<r.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};

let area = function (r){
    return (Math.PI*r*r);
};
let circumference = function (r){
    return (2*Math.PI*r);
}

let diemeter = function (r){
    return (2 * r);
}

// console.log("Area : ")
// console.log(calculate(radius,area));
// console.log("Circumference : ");
// console.log(calculate( radius, circumference));

 //** Using  Map **//

// console.log("Area : ")
// console.log(radius.map(area));
// console.log("Circumference : ")
// console.log(radius.map(circumference));
// console.log("Diemeter : ")
// console.log(radius.map(diemeter));

 //**Using find prototype way**//

//  Array.prototype.find = function (logic){
//     const output = [];
//     for(var i=0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return (output);
//  }

//  console.log("Area : ")
//  console.log(radius.find(area));
//  console.log("Circumference : ")
//  console.log(radius.find(circumference));
//  console.log("Diemeter : ")
//  console.log(radius.find(diemeter));

 //** .Map() **//

let arr=[{firstname:"Mohammed ",lastname:"Fazeen",age:19},{firstname:"Husni ",lastname:"zakee",age:19},{firstname:"Mohan ",lastname:"Sonal",age:16},{firstname:"Mohammadh ",lastname:"Razeen",age:9},{firstname:"Samsudheen ",lastname:"Fasrath",age:29}
];

let output = arr.map( (x)=> x.firstname+" "+x.lastname);
console.log(output);

let findsameage = arr.reduce(function(acc,current){
    if(acc[current.age]){
        acc[current.age]++;
    }else{
        acc[current.age]=1;
    }
    return acc;
},{});
console.log(findsameage);

let belowsixteen = arr.filter((x)=> x.age<18).map((x)=> x.firstname);
console.log(belowsixteen);

