import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  techs = [
    {
      'frontend':['HTML','CSS','JavaScript','Angular','Bootstrap','Bulma'],
      'backend':['PostgresSQL','MongoDB','Node','Python','NoSQL','SQL'],
      'uiux':['Canva','Photoshop','Illustrator','Word','Excel','Figma'],
      'tools':['Red Hat','Ansible','Git','Docker','Podman','FreeIPA']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
