// const arr=[2,4,6,8,9,"abhi",0,6];

// // Length
// console.log(arr.length);

// // Accessing array elements

// console.log(arr.at(-2));
// //                     at is latest method , negative index bhi allowed 

// console.log(arr[2]); //ye negative index me "undefined" deta hai

// //structuredclone:- ye ek naya array heap memory me bana deta hai aur iska ek naya address bhi stack me save ho jata hai
// // simple equal krne pe memory location same reh jati thi pr isme nhi

// const newarr=arr;
// console.log(arr==newarr); //true

// const newarr1=structuredClone(arr);
// console.log(arr==newarr1);  //false


//push, add element at the end
// arr.push(55);
// console.log(arr);

// //pop, pop the last element from array
// arr.pop();
// console.log(arr);

// //unshift, adds an element at the beginning
// arr.unshift(74);
// console.log(arr);

// //shift, removes the first element
// arr.shift()
// console.log(arr);

// //delete operation----not recommended because it creates an hole after deleting the element
// delete arr[2];
// console.log(arr);



// //indexof(),  lastindexof(),  includes()
// console.log(arr.indexOf(6));
// console.log(arr.lastIndexOf(6));
// console.log(arr.includes(0));


// const arr=[2,4,6,8,9,"abhi",0,6];

// //slice
// // console.log(arr);
// let a=arr.slice(2,5);
// console.log(a);
// console.log(arr);


//splice
// console.log(arr);
// console.log(arr.splice(2,5));
// console.log(arr);

// //splice(starting_index,total_element_delete,add value)
// arr.splice(2,3,"mani","rohit","anshuman")
// console.log(arr);

// console.log(arr);
// console.log(arr.toString());
// console.log(arr.join("*"));
// console.log(arr.join(""));
// console.log(arr.join(" "));


// // concat()
// let arr1=[2,45,60,62];
// let arr2=[45,69,66,8];
// let arr4=[5,6,8,9];
// // let arr3= arr1.concat(arr2,arr4);
// // console.log(arr3);

// // 2D array using push
// arr1.push(arr2);
// console.log(arr1);

// //2D-Array
// let arr=[1,2,3,4,5,6,7,8,9];
// let arr2d=[[1,2,3],[4,5,6],[7,8,9]]

// //flat ka use to convert into 1d array
// let newarr=arr2d.flat();
// console.log(newarr);

// let arr3d=[[1,2,3,[14,15,15]],[4,5,6],[7,8,9]];
// // 3d ko bhi 1d me flat ke help se kr skte hai flat(2) krke
// let newarr3d=arr3d.flat(2);
// console.log(newarr3d);
// // agar pta na ho kitna dimensional ka array hai tb "flat(infinitely)" laga skte hai


// // Array.isArray()------>>for confirmation of array
// let abc=[1,2,3,5,6];
// console.log(Array.isArray(abc));

