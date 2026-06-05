let str1="i am abhishek\n";
let str2='i am an engineering student.\n';

let str3=`this is the best method of writing string.`;  //iss trike se likhne ke bad ham variable ka use aasani se le skte hai apne output me

// console.log(str1,str2,str3);

let value=80;
// console.log(`price of mango is ${value}.`);


//CONCATENATION
let s1='hello';
let s2=` madam`;
let s3=s1+s2;
// console.log(s3);

//Finding Length of string
let str4=`i am abhi`;
// console.log(str4.length);


//Escape charater----->>  \

let str5=`i am \\n abhi.`;
// console.log(str5);

// Accesing strings
let str6="Abhishek";

//Method1
// console.log(str6[2]);

//method2
// console.log(str6.charAt(6));

//  to Upper Case
//to Lower Case

// console.log(str6.toLowerCase());
// console.log(str6.toUpperCase());
// console.log(str6);


//-------------->>>>>>>>EXTRACTING IN STRINGS

let hero="hello Coder Army Coder.";
// console.log(hero.indexOf("Coder"));
// console.log(hero.lastIndexOf("Coder"));
// console.log(hero.includes("Army"));



//--------->>>>EXTRACTING SUBSTRINGS
let newstring='helloDon';
// console.log(newstring.slice(1,3));
// console.log(newstring.substring(1,6));
// console.log(newstring.slice(-5,7));


//-------------->>>>>REPLACING CONTENT

let str8="hello ji kaise ho ji"
// console.log(str8.replace("ji","money"));
// console.log(str8.replaceAll("ji","bhai"));

//--------->>> SPLITTING STRINGS

// console.log(str8.split(" "));

//------>>>>TRIMMING

let str9="  hello mai hu don   ";
// console.log(str9);
// console.log(str9.trim());


//----------NEW WAY TO CREATE STRINGS
let latestway= new String("hello bhai");
console.log(latestway);
console.log(typeof latestway);
