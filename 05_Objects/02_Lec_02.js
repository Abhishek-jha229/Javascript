// // shallow copy jisme reference copy hota hai
// let obj1={
//     a:1,
//     b:2
// }

// let obj2 = obj1; // Shallow copy
// obj2.a=10;
// console.log(obj2,obj1);

// // deep copy
// let obj3= structuredClone(obj1);
// obj3.a=20;
// console.log(obj3,obj1);

// Nested object
// const user={
//     name:"abhi",
//     balance:420,
//     address:{
//         pincode:123456,
//         city:"benipur"
//     }
// }

// console.log(user.address.pincode);
// console.log(user.address);
// const user2= Object.assign({},user);
// console.log(user2);
// user2.address.pincode=78945;
// console.log(user.address.pincode);

//  BEST
// deepcopy ke liye "structureclone" use kro



// Destructing of an object
// let obj ={
//     name:"abhi",
//     money:420,
//     balance:30,
//     age:20
// };

// // const {name, balance} = obj; // Method 1
// // console.log(name,balance);


// // const {name:full_name, balance:amount, age:umar} = obj; // Method 2
// // console.log(full_name,amount,umar);

// const {name, age, ...obj1} = obj;  // Method 3 use of rest operator
// console.log(obj1);

// const arr = [3,2,1,5,10];
// const [first,second] =arr;
// const [first,second, ,third] =arr;
// console.log(first,second,third);

// const [first,second,...third] =arr;
// console.log(third);



// let obj ={
//     name:"abhi",
//     age:20,
//     arr:[90,40,60,80],
//     address:{
//         pincode:555,
//         city:"benipur",
//         state:"america"
//     }
// };
// const {address:{pincode,city}} =obj;
// console.log(pincode,city);

// const {arr:[first]}=obj;
// console.log(first);   // 90

// let user ={
//     name:"abhi",
//     amount:420,
//     greet: function(){
//         return "hello baccho"
//     },
//     meet: function(){
//         console.log(2026);
//     }
// }

// console.log(user.greet());
// user.meet();






/////////  IMPORTANT SECTION ...... PROTOTYPE
// __proto__

let obj ={
    name:"abhi",
    amount:420,
    greet : function(){
        return "hell0"
    }
}
console.log(obj.toString()); // jb hamne  toString krke kuch declare kiya hi nhi hai phir ye aa kaha se rha hai

let arr=[2,4,5,7];
arr.push(10); // hamne push nam ka koi declare hi nhi kiya hai phir bhi ye kaha se aa rha 
console.log(arr);
