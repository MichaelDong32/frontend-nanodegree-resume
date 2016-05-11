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


var name = "Michael Dong";
var role = "Problem solver";
var formattedRole = HTMLheaderRole.replace('%data%',role);
var formattedName = HTMLheaderName.replace('%data%',name);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); 

//create the object bio
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

//create variables from the object, replace them in the js helper
var picture = HTMLbioPic.replace('%data%',bio.bioPic);
var message = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);

//add them to the index.html in javascript

$("#header").append(picture);
$("#header").append(message);

var skills = HTMLskills.replace('%data%',bio.skills);
$("#header").append(skills);

var contacts = HTMLcontactGeneric.replace('%data%',bio.contacts);
/*var phone = HTMlmobile.replace('%data%', bio.phone);
var location = HTMLlocation.replace('%data%', bio.location);*/

$("#topContacts").append(contacts);
/*$("#header").append(phone);
$("#header").append(location);*/

//using dot notation, create work object
var work = {};
work.position = "kingpin";
work.employer ="Simillimum";
work.years = 21;
work.city = "Wellington";

// create education object using bracket notation.
var education = {
  "schools": [
    {
      "name": "Central Institute of Technology",
      "city": "Wellington",
      "major": "Pharmacy"
    },
    {
      "name": "Imperial College",
      "city": "London",
      "major": ["Homeopathy","Nutrition"]
    },
    {
      "name": "EDA",
      "city": "Wellington",
      "major": ["web development"]
    }
  ],

  "onlineCourses": {
      "name": "Code academey - full stack program",
      "URL": "www.codeacademy.com",
      "major": "full stack development"
    }
}
 

//append to html

$("#main").append(work.position);
$("#main").append(education.name);


