/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Darshit ",
  title: "Hi all," + "     " + "I'm Darshit",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/15kK4LE5KNJlwwfyV3WvTpfZxavFRiF4j", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Darshitkumarsinghal",
  linkedin: "https://www.linkedin.com/in/darshit-kumar-singhal-b563a4170/",
  gmail: "darshitkumarsinghal.1@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end/ User Interfaces for your web applications"
    ),

    emoji("⚡ Integration of third party services such as AWS ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GIT & GITHUB",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Birla Institute of Technology, Mesra",
      logo: require("./assets/images/Birla-Institute-of-Technology-Mesra.jpg"),
      subHeader: "Bachelor of Technology",
      duration: "2018 - 2022",
      desc: "Persuing B.Tech in ECE"
    },
    {
      schoolName: "Sarvodaya SR. SEC School,Rupbas(Bharatpur)",
      logo: require("./assets/images/BSER-Logo.jpeg"),
      subHeader: "10+2(PCM)",
      duration: "2014 - 2017",
      desc: ""
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "PROJECTS",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/favicon.ico"),
      projectName: "Messenger",
      projectDesc:
        "Tech:- MongoDB,NodeJs,ExpressJs,ReactJS,Socket.io . \n" +
        " Uses Google Authentication for logging in.\n" +
        "Users can chat(1-1) with other users & watch live status of other users\n",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Darshitkumarsinghal/Messenger"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/corona-tracker-social-image-1-1024x576.jpg"),
      projectName: "Covid-19 Tracker and vaccine finder",
      projectDesc:
        "Tech:- ReactJs ,React Hooks,CSS , leaflet.js.\n" +
        "User can search vaccine ability in india by PINCODE or District name.\n" +
        "Track Covid 19 cases, Recover, Death Daily updated over worldwide.\n" +
        "User can see on map & visualisation on Graph.",
      footerLink: [
        {
          name: "Visit Code",
          url: "https://github.com/Darshitkumarsinghal/vaccine_covid_Tracker"
        }
      ]
    },
    {
      image: require("./assets/images/blog.jpg"),
      projectName: "Blog webApp",
      projectDesc:
        "Tech :- MongoDB,NodeJS,Express.js,ReactJS,Okta Authentication.\n" +
        "User can CREATE , UPDATE, DELETE Blog.\n" +
        "User can Comment on Other user's Blog  & Delete Comment also.\n",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Darshitkumarsinghal/placementHelper"
        }
      ]
    },
    {
      image: require("./assets/images/sorting.png"),
      projectName: "Sorting visualizer",
      projectDesc:
        "Visualize sorting algorithms like Merge Sort, Quicksort,Bubble Sort and Insertion Sort.\n" +
        "Simple interactive UI created with front-end technologies like React.js, JavaScript, HTML5, CSS3\n",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Darshitkumarsinghal/sorting"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Docker",
      subtitle:
        "Docker Essentials: A Developer Introduction\n" + "Issued by IBM\n",
      image: require("./assets/images/Docker_Essentials_-_ISDN.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.credly.com/badges/2cf9204d-55e2-4261-bd8f-65f7b9585cfd?source=linked_in_profile"
        }
      ]
    },
    {
      title: "Java,Problem Solving,SQL,Python ",
      subtitle:
        "5* on Hackerrank.\n" +
        "4* on SQL \n" +
        "5* in Python \n" +
        "3* in Problem solving \n",
      image: require("./assets/images/hackerrank-logo.jpg"),
      footerLink: [
        {
          name: "verify",
          url: "https://www.hackerrank.com/darshitkumarsin1"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6378110067",
  email_address: "darshitkumarsinghal.1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
