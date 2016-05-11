/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Michael");

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
var role = "Problem solver";
var formattedRole = HTMLheaderRole.replace('%data%',role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); 

var bio = {
  "name": "Michael Dong",
  "role": "Junior Software Developer",
  "contacts": {
    "email": "mjdong32@gmail.com",
    "phone": "0272332823",
    "location": "Wellington"
    },
  "welcomeMessage": "Hello and check out my awesome resume.",
  "skills": ["communicator ", "listener ", "empathy " , "team player " ,"coach "],
  "bioPic": "images/fry.jpg"

}


var picture = HTMLbioPic.replace('%data%',bio.bioPic);
var message = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);

$("#header").append(picture);
$("#header").append(message);

var skills = HTMLskills.replace('%data%',bio.skills);
$("#header").append(skills);

var contacts = HTMLcontactGeneric.replace('%data%', bio.contacts);
/*var phone = HTMlmobile.replace('%data%', bio.phone);
var location = HTMLlocation.replace('%data%', bio.location);*/

$("#topContacts").append(contacts);
/*$("#header").append(phone);
$("#header").append(location);*/
