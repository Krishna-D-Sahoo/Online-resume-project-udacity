// My code goes here
// data for bio
var bio = {
    "name": "Krishna Dwaipayan Sahoo",
    "role": "Front-web developer",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "120-234-5678",
        "email": "krishnads224@yahoo.com",
        "github": "krishna-d-sahoo",
        "twitter": "@krishD",
        "location": "Odisha, India"
    },
    "skills": ["observer", "target oriented", "keen learner", "smart and hard worker"],
    "welcomeMessage": "&#34; You are an awesome player &#34; -this is what I say to myself when I accomplish things. In Udacity I have learnt that nothing is impossible; when you are discouraged, take ample rest and motivate yourself. When you come back, you might find the solution to the problem."
};

// data for education
var education = {
    "schools": [{
        "name": "Biju Pattnaik University of Technology",
        "location": "Odisha, India",
        "degree": "Bachelor",
        "majors": ["CS"],
        "dates": "2012",
        "url": 'http://bput.ac.in'
    }, {
        "name": "NIST",
        "location": "Odisha, India",
        "degree": "Master",
        "majors": ["CS"],
        "dates": "2016",
        "url": "http://nist.com"
    }],
    "onlineCourses": [{
        "title": "Front-web development",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }]
};

// data for work
var work = {
    "jobs": [{
        "employer": "Infosys",
        "location": "Mysore, Karnataka",
        "title": "Software developer",
        "description": "Software development and testing",
        "dates": "2016"
    }, {
        "employer": "TCS",
        "location": "Ahmedabad, Gujrat",
        "title": "Software developer",
        "description": "Software development and testing",
        "dates": "2018"
    }]
};

// data for projects
var projects = {
    "projects": [{
        "title": "Sample-project-1",
        "dates": "2016",
        "description": "This is a sample project. Right now I am trying to develope it under the guidance of Udacity.",
        "images": ["images/project.jpg"]
    }]
};

// For displaying bio
bio.display = function() {

    // For displaying name and role
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName, formattedRole);

    // For displaying profile picture and welcome message
    var formattedbioPicture = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedbioWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedbioPicture, formattedbioWelcome);

    // For displaying skill set
    $("#header").append(HTMLskillsStart);
    if (bio.skills.length > 0) {
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }

    // For displaying contacts
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $('#topContacts, #footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

};

// For displaying work
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        $('.work-entry:last').append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedDescription);

    }
};

// For displaying projects
projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

// For displaying education
education.display = function() {
    if (education.schools.length > 0) {

        for (var edu = 0; edu < education.schools.length; edu++) {
              $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
            formattedSchoolName = formattedSchoolName.replace('#', education.schools[edu].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
            var formattedSchoolMajor = '';
            if (education.schools[edu]['majors'].length > 0) {
                for (var major = 0; major < education.schools[edu]['majors'].length; major++) {
                    formattedSchoolMajor += HTMLschoolMajor.replace("%data%", education.schools[edu]['majors'][major]);
                }
            }

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
        }
    }
    if (education.onlineCourses.length > 0) {
        $('#education').append(HTMLonlineClasses);
        for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
            $('#education').append(HTMLschoolStart);
            var educate = education['onlineCourses'][onlineCourse];
            var formattedUrl = HTMLonlineURL.replace("%data%", educate['url']);
            var formattedTitle = HTMLonlineTitle.replace("%data%", educate['title']);
            var formattedSchool = HTMLonlineSchool.replace("%data%", educate['school']);
            var formattedDates = HTMLonlineDates.replace("%data%", educate['dates']);
            $('.education-entry:last').append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
        }
    }
};

// For showing map
$('#mapDiv').append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
