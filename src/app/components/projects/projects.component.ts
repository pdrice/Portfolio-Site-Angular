import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

projects: any[] = [
  {
    'image':'/assets/images/projects/portfolio.png',
    'title':'Personal Portfolio',
    'description':'This web app is my personal portfolio site that you are on. It displays my skills in small animations, link references and website deployment through third party servers.',
    'skills':['html','css','javascript','typescript','angular'],
    'source':'https://github.com/pdrice/Portfolio-Site-Angular.git',
    'visit':'https://patriciodrice.com/',
  },
  {
    'image':'/assets/images/projects/zodiacbling.png',
    'title':'Zodiac Bling',
    'description':'This web app is my personal e-commerce site that has been functional since 2017. It displays my skills in front-end UI/UX digital design, database management, and digital marketing. ',
    'skills':['html','css','javascript','liquid'],
    'source':'https://zodiacbling.com/',
    'visit':'https://zodiacbling.com/',
  },
  {
    'image':'/assets/images/projects/todoinprogressdone.png',
    'title':'ToDo-InProgress-Done',
    'description':'This web app is a project management application. You type your to do then submit it then you can move your to do to in progress or done and delete them.',
    'skills':['html','css','javascript', 'typescript', 'Angular'],
    'source':'https://github.com/pdrice/ToDo-InProgress-Done-Angular',
    'visit':'https://todo-inprogress-done.netlify.app',
  },
  {
    'image':'/assets/images/projects/tindog.png',
    'title':'Tin-Dog',
    'description':'This web app displays my skills on making a website made with the Bootstrap CSS framework with Mobile responsive capabilites.',
    'skills':['html','css','javascript','bootstrap'],
    'source':'https://github.com/pdrice/Tin-Dog-Sample-Site',
    'visit':'https://tindog-appx.netlify.app/',
  },
  {
    'image':'/assets/images/projects/pokemonapi.png',
    'title':'Pokemon API',
    'description':'This web app displays my skills on gathering data from a public Pokemon API and displaying the data in a specific way.',
    'skills':['html','css','javascript', 'typescript', 'angular'],
    'source':'https://github.com/pdrice/Pokemon-API-Angular',
    'visit':'https://pokemon-api-pd.netlify.app/',
  },
  {
    'image':'/assets/images/projects/wikisearch.png',
    'title':'Wikipedia Search',
    'description':'This web app communicates with a Wikipedia API. What you enter in the wiki search option; links, word counts and snippets of document will be displayed.',
    'skills':['html','css','javascript', 'typescript', 'angular'],
    'source':'https://github.com/pdrice/Wiki-Search-Angular',
    'visit':'https://wiki-search-pd.netlify.app/',
  },
  {
    'image':'/assets/images/projects/simon.png',
    'title':'Simon Game App',
    'description':'This web app is a similar to a simon says game in real life. You just have to follow the buttons.',
    'skills':['html','css','javascript'],
    'source':'https://github.com/pdrice/Simon-Game-',
    'visit':'https://simon-game-appx.netlify.app/',
  },
  {
    'image':'/assets/images/projects/quiz.png',
    'title':'Quiz App',
    'description':'This web app is a quiz application that will store your score with each question you answer and you can reset the quiz at any time.',
    'skills':['html','css','javascript', 'typescript', 'angular'],
    'source':'https://github.com/pdrice/Quiz-App-Angular',
    'visit':'https://quiz-app-signals-pd.netlify.app/',
  },
  {
    'image':'/assets/images/projects/drum.png',
    'title':'Drum Kit',
    'description':'This web app is a drum kit application you click on a specific button, that button will make that note noise.',
    'skills':['html','css','javascript', 'typescript', 'angular'],
    'source':'https://github.com/pdrice/Drum-Kit-Web-App',
    'visit':'https://drum-kit-appx.netlify.app/',
  },
  {
    'image':'/assets/images/projects/task.png',
    'title':'Task Managagement',
    'description':'This web app saves and stores the tasks and boards of task for your everyday needs.',
    'skills':['html','css','javascript', 'typescript', 'angular'],
    'source':'https://github.com/pdrice/Task-Management-Angular',
    'visit':'https://task-management-pd.netlify.app/',
  },
  {
    'image':'/assets/images/projects/typing.png',
    'title':'Typing Challenge',
    'description':'This web app displays texts you must type and when you type the wrong character you get a red error and when its right you get a green character.',
    'skills':['html','css','javascript', 'typescript', 'angular'],
    'source':'https://github.com/pdrice/Typing-Game-Angular',
    'visit':'https://typing-challenge-pd.netlify.app/',
  },
  {
    'image':'/assets/images/projects/photoapi.png',
    'title':'Photo API',
    'description':'This web app communicates with a photo API and everytime you click the button a new photo is displayed.',
    'skills':['html','css','javascript', 'typescript', 'angular'],
    'source':'https://github.com/pdrice/Photo-API-Angular',
    'visit':'https://photo-api-pd.netlify.app/',
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
