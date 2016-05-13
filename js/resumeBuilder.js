


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
      "employer": "zoo",
      "title": "lion tamer",
      "dates": "2000- current",
      "description": "Excitement, thrills and danger"
    },
    {
      "employer": "chimelong circus",
      "title": "trapeze artist",
      "dates": "1988-1997",
      "description": "swinger baby"
    },
    {
      "employer": "nasa",
      "title": "astronaut",
      "dates": "1986 - 1988",
      "description": "fly me to the moon and let me play among the stars. Let me see what life is like between Jupiter and Mars"
    }
    
  ]
}


// create education object literal notation.
var education = {
  "schools": [
    {
      "name": "Circus",
      "location": "Wellington",
      "degree": "Diploma in daredevil",
      "major": "crazy things",
      "dates": "1983-1985"
    },
    {
      "name": "Imperial College",
      "location": "London",
      "degree": "bachelor",
      "major": ["zoo training"],
      "dates": "1990 -1994"
    },
    {
      "name": "EDA",
      "location": "Wellington",
      "degree": "what degree",
      "major": ["Hmmmmm?"],
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


//creat a function called displayWork
function displayWork() {
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

    }
}

//call the displayWork function
displayWork();

function = projects.display() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[project].title);
    $ (".project-entry:last").append(formattedTitle);

  }
};

/*click data

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks (x,y)
});
*/
//capitalization of name


//create a function to change name to capitalize surname

function inName(name) {
  name = name.split(" ");
  console.log(name);

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase;

  return name[0] + " " + name[1];
 
}

$("#main").append(internationalizeButton);

//projects

