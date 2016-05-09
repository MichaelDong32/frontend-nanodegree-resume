/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append("Michael");

 // [string].replace([old], [new]);

/*var awesomeThoughts = ('My name is Michael and I am AWESOME!')

console.log(awesomeThoughts)

var email = ('michaeldong@gmail.com')

var newEmail =
  email.replace('michaeldong', 'michaeldong32')

console.log(email)
console.log(newEmail)

var funThoughts =
    awesomeThoughts.replace('AWESOME', 'FUN')

console.log(funThoughts)

$("#main').append(funThoughts); 
*/

var formattedName = HTMLheaderName.replace('%data%',name);

var name = "Michael Dong";
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace('%data%',role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);