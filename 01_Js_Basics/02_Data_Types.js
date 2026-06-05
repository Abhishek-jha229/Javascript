//....................Primitive-Datatypes................


//number, string, boolean, undefined, null, bignit, symbol

// Number datatype
let count=229;
console.log(count);
console.log(typeof count);

//string
let name="Abhishek";
console.log(name);
console.log(typeof name);

//boolean
let equality= 5==5;
console.log(equality);
console.log(typeof equality);

//undefined
let x;
console.log(x);
console.log(typeof x);

//null datatype
let money=null;
console.log(money);
console.log(typeof money);

//bigint datatypes
let number=445487745451454646468875153225486112n;
console.log(number);
console.log(typeof number);

// //symbol datatype
// let id = Symbol("id")
//typeof----->>>> symbol



//............Non-primitive datatypes.................

// Array, object,function

//Array
let arr=[10,20,30,"Abhi","shek"];
console.log(arr);
console.log(typeof(arr));

//object
let detail={
    user_name:"Abhi",
    account_number:123456789,
    balance:229
}
console.log(detail);
console.log(typeof detail);

//function
let fun=function(){
    console.log("hello good morning")
}
fun();
