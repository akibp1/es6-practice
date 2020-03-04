/**template use korchi akhane doita karate sign (``)use kore vitore onek kichu kora jai
 ja amni te korte gale jamela kore 
 */
const firstName = "Justin";
const lastName = "TimberLake";

const fullName = firstName +" "+ lastName + " is a good boy";
console.log(fullName);
//same things es6 template makes its easy
const fullName2 = `${firstName} ${lastName} is a good boy`;
console.log(fullName2);
//line break
const multiline = "I love you\n"+ "I miss you\n" +"I want you";
console.log(multiline);
//same things es6 template makes its easy like:
const multiline2 = `I love You
I miss You
I need you `;
console.log(multiline2);