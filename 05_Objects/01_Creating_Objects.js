// isme sara keys strings ke form me rhta hai.

// const obj ={
//     0:22, //number jb key rhe tb isko method-2 se access krenge aur isko string ki tarah likhe ya na likhe dono chalega.
//     1:50,
//     2:70,
//     name:"Abhi",
//     age:20,
//     gender:"male",
//     account_number:1234,
//     "account number":123456, //isme hamari majburi hai ki ham method 2 se hi access kr skte hai.
//     undefined:99,
//     null:"sohan"
// }

// console.log(obj.undefined); //dono method se access kr skte hai 
// console.log(obj[null]); // dono method se access kr skte hai isko bhi chahe string le ya bina string ka.


// console.log(typeof obj);

// // Accessing objects
// console.log(obj.gender); //  method 1
// console.log(obj["age"]); // method 2 isme key ko string ke tarah lena prega kyuki wo string hi hote hai.
// console.log(obj["0"]);
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj)



// Another way of creating object

// const person = new Object();

// // property add
// person.name = "abhi";
// person.age=20;
// person.gender="male";
// console.log(person);

// // delete
// delete person.age;
// console.log(person);

// // Modify or update
// person.name="anshuman";
// console.log(person);


// // third method 

// class people{
//     constructor(na, ag, gen){
//         this.name=na;
//         this.age=ag;
//         this.gender=gen;
//     }
// }

// let per1 = new people("abhi",20,"male");
// let per2 = new people("anshuman",19,"male");
// console.log(per1);
// console.log(per2);


//---->> Common methods for objects


// 1. Object.keys()    2. Object.values()   3. Object.entries()  
// 4. Object.assign()  ----> Copies properties from one or more source objects to a target object
// 5. Object.freeze() ---> Prevents any modification to an object
// 6. Object.seal() ---> Prevents adding or removing properties but allows modification of existing properties


// let obj={
//     name: "abhi",
//     age:20,
//     account_balance:420,
//     gender:"male"
// }

// keys,values

// console.log(Object.keys(obj));
// const arr = Object.values(obj);
// console.log(arr);

// // keys:values

// const arr2= Object.entries(obj);
// console.log(arr2);

// ---------->>>>  assign use case

// const obj1 = {a:1,b:2};
// const obj2={c:3,d:4};
// const obj4={e:5,f:6};

// const obj3 = Object.assign({},obj1,obj2,obj4); // yaha pahle empty dena jruri hai kyuki phla target hota hai to usme changes hote hai
// // nhi to phla jo rhega usko bhi change kr dega ye

// console.log(obj3);
// // obj3.a=11;
// // console.log(obj1.a); // ye change nhi hua hai kyuki yaha shallow copy aur deepcopy concept

// // Spread operator
// const obj5 = {...obj1,...obj2,...obj4};
// console.log(obj5);

// Deepcopy and shallow copy

// Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods.
// A shallow copy is created using methods like the spread operator ({ ...obj }) or Object.assign().





// .........>>> Object.freeze()
// freeze object ko completely lock kr deta hai 
// 1. new property add nhi kr skte
// 2. existing property delete nhi kr skte
// 3. existing property modify nhi kr skte

// const data={
//     name:"Abhi",
//     age:20,
//     gender:"male",
//     address:{
//         pincode:123
//     }
// }

// Object.freeze(data); // ab isme koi badlav nhi hoga
// data.name="anshu";
// data.age=19;

// console.log(data); // bina change ka

// console.log(Object.isFrozen(data));  // freeze hai ki nhi check krne ka tarika

// // Important note nested object automatically freeze nhi hota usko ek ek krke krna prta
// Object.freeze(data.address);  // ab nested bhi change nhi hoga





// .........>>> Object.seal()
// new property add nhi kr skte 
// property delete nhi kr skte
// pr existing property ki values change kr skte hai

// let student = {
//     name: "Rahul",
//     marks: 80
// };

// Object.seal(student);

// student.marks = 95;      // allowed
// student.city = "Delhi";  // add nahi hoga
// delete student.name;     // delete nahi hoga

// console.log(student);

// console.log(Object.isSealed(student)); // seal check krne ke liye

// // Note Object.seal()  isme bhi nested wala automatically seal nhi hota ussi tarah isko bhi krna prta hai
