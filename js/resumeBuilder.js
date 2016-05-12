


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
  "bioPic": "images/fry.jpg",
  "welcomeMessage": "Hello and check out my awesome resume.",
  "skills": ["communicator ", "listener ", "empathy " , "team player " ,"coach "]
}

//create variables from the object, replace them in the js helper
var picture = HTMLbioPic.replace('%data%',bio.bioPic);
var message = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);

//add them to the index.html in javascript

$("#header").append(picture);
$("#header").append(message);



//create work object with object literal notation
var work = {
  "jobs": [
    {
      "employer": "Simillimum",
      "title": "Director",
      "dates": "1997- current",
      "description": "Responsible for planning, strategy and management"
    },
    {
      "employer": "Paydens",
      "title": "Pharmacist",
      "dates": "1988-1997",
      "description": "sole charge Pharmacist"
    },
    {
      "employer": "Bristol Myers Squibb",
      "title": "Area Manager",
      "dates": "1986 - 1988",
      "description": "Sales and Marketing of pharmaceuticals"
    },
    {
      "employer": "Taranaki Base Hospital",
      "title": "Staff Pharmacist",
      "dates": "1984 - 1986",
      "description": "Clinical and ward pharmacist"
    }
  ]
}


// create education object literal notation.
var education = {
  "schools": [
    {
      "name": "Central Institute of Technology",
      "location": "Wellington",
      "degree": "Diploma in Pharmacy",
      "major": "Pharmacy",
      "dates": "1983-1985"
    },
    {
      "name": "Imperial College",
      "location": "London",
      "degree": "Diploma in Homeopathy",
      "major": ["Homeopathy","Nutrition"],
      "dates": "1990 -1994"
    },
    {
      "name": "EDA",
      "location": "Wellington",
      "degree": "none",
      "major": ["web development"],
      "dates": "2016"
    }
  ],

  "onlineCourses": {
      "title": "full stack program",
      "school": "Code Academy",
      "dates": "Oct 2015 - March 2016",
      "URL": "www.codeacademy.com"
    }
}

var projects = {
  "projects": [
    {
    "title": "Frog racer",
    "dates": "May2016",
    "description": "Vanilla JavaScript racing game",
    "images": "http://michaeldong32.github.io/javascript-racer/"
    }
  ]
}

//check to see if skills are in bio
if (bio.skills.length > 0){

//If yes, append to HTMLskillsStart
  $("#header").append(HTMLskillsStart);

//append each skill to the HTML element with id-skills
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);

  $("#skills").append(formattedSkill);
}

//for in loop for work

for (job in work.jobs) {

  //append to HTMLworkStart
  $("#workExperience").append(HTMLworkStart);

  //format using js helper and replace method

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);

  //concatenate 2 variables  

  var formattedEmployerTitle = formattedEmployer + formattedTitle;


  $(".work-entry:last").append ( formattedEmployerTitle);

  var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

$(".work-entry:last").append (formattedworkDates);
$(".work-entry:last").append (formattedworkDescription);

};