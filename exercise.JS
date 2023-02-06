// let person = {
//     name : 'niloo',
//     famil:"ikdd", 
// }
// let niloo = 'nilo'
// let info = `my name is ${niloo}`
// console.log(info)

const { result } = require("lodash");


let categoris = [
    {
        name:'food',
        numofprodoct:'1000'

    }
    ,
    {
        name:'fastfood',
        numofprodoct:'10050'
    }
    ,
    {
        name:'drink',
        numofprodoct:'1000'
    }
]
// categoris.forEach((value)=>{
//     console.log(value.name)
// })

// let fillter= categoris.filter((value)=>{
//     return value.numofprodoct < 2000;
// }).map ((value)=>value.name.length)
// console.log(fillter);

let map= categoris.map((value)=>{
    return value.name.length;
});
// console.log(map);
let info = [
    {id: 1, name: 'John',year: 1332, passed:1388},
    {id: 2, name: 'Doe', year:1325, passed:1395},
    {id: 3, name: 'Smith', year:1345, passed:1395},
    {id: 4, name: "NILOO", year:1315, passed:1395},
    {id: 5, name: "mahtab",year:1335, passed:1375},
    {id: 6, name: "hasan", year:1320, passed:1385},
    {id: 7, name: "alyas", year:1325, passed:1368},


];
// let x =info.map((value)=>{
//    return value.name });
function getnamesandeages (value){
   
        const age = value.passed - value.year
    
        return {name: value.name ,age:age} 
}

const namesandeages = info.map(
    getnamesandeages
    // (value)=>{
    // const age = value.passed - value.year

    // return {name: value.name ,age:age} }
);
// {name: value.name ,age} این شکلی هم میشه نوشت اکولاد هم حتما باید بزاریم

// let y = info.map(
//     (value)=>{ return value.name})
// console.log(getnamesandeages);

function nilo(callback){
    let result= []
    for (let i =0 ; i< info.length;i++){
    result.push(callback(info[i]))
        
    }

    return result 
}
// console.log(nilo(getnamesandeages))




let data = [
    {id: 1, name: 'John',year: 1332, passed:1388},
    {id: 2, name: 'Doe', year:1325, passed:1395},
    {id: 3, name: 'Smith', year:1345, passed:1395},
    {id: 4, name: "NILOO", year:1315, passed:1395},
    {id: 5, name: "mahtab",year:1335, passed:1375},
    {id: 6, name: "hasan", year:1320, passed:1385},
    {id: 7, name: "alyas", year:1325, passed:1368},


];


function niloomap(tabe){
    let result=[]
    for (let i = 0; i < data.length; i++) {
        result.push (tabe( data[i]));
        
    }
    return result
}
// console.log(niloomap(getnamesandeages))

let array = [
    {id: 1},
   {id: 2},
   {id: 3},
   {id: 4},
   {id: 5},
   {id: 6},
   {id: 7},
   {id: 8},
   {id: 9},
   {id: 10},
   {id: 11},
   {id: 12},
   {id: 13},
   {id: 14},
   {id: 15},
   // ...
];
let sumid= array.reduce((sum ,item)=>{
    sum + item.id 
    return 0})
console.log(sumid)
// let sumId = array.reduce((sum, item) => sum + item.id, 0);
// console.log(sumId);


// reduce

let data1 = [
    {id: 1, name: 'John',year: 1332, passed:1388},
    {id: 2, name: 'Doe', year:1325, passed:1395},
    {id: 3, name: 'Smith', year:1345, passed:1395},
    {id: 4, name: "NILOO", year:1315, passed:1395},
    {id: 5, name: "mahtab",year:1335, passed:1375},
    {id: 6, name: "hasan", year:1320, passed:1385},
    {id: 7, name: "alyas", year:1325, passed:1368},
];



let jambamap= data1.map((item)=>{})

let somofyears = data1.reduce(
    (sabet , item)=>{
    return item.year+sabet 
    },
    0
)



let sum = data1.reduce(
    (sabet , item )=>{
        return sabet+ item.id 
    },0
)

console.log(sum)






















