import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  projects: any[] = [
    {
      'image':'/assets/images/certifications/rhce.png',
      'title':'Red Hat Certified Engineer',
      'description':'An advanced certification that validates expertise in automating tasks, integrating emerging technologies, and applying automation for efficiency and innovation.',
      'skills':['230-226-698'],
      'visit':'https://rhtapps.redhat.com/verify?certId=230-226-698',
    },
    {
      'image':'/assets/images/certifications/rhcsa.png',
      'title':'Red Hat Certified System Administator',
      'description':'A professional certification that validates one’s comprehensive knowledge and skills in managing, operating, and troubleshooting Red Hat Enterprise Linux systems.',
      'skills':['230-226-698'],
      'visit':'https://rhtapps.redhat.com/verify?certId=230-226-698',
    },
    {
      'image':'/assets/images/certifications/sec_plus.png',
      'title':'Certified CompTIA Security+',
      'description':'A certification that signifies a professional’s ability to understand and implement cybersecurity principles, and mitigation across a variety of security environments',
      'skills':['TCYWEV6QF2FQ16W8'],
      'visit':'https://www.certmetrics.com/comptia/public/verification.aspx/',
    },
    {
      'image':'/assets/images/certifications/google_sec.png',
      'title':'Google Cybersecurity',
      'description':'A professional credential for careers as cybersecurity analysts, to identify and mitigate risks, threats, and vulnerabilities, and to use tools like Python, Linux, SQL, and Security Information and Event Management (SIEM) systems.',
      'skills':['HEQUTYJKPKU2'],
      'visit':'https://coursera.org/verify/professional-cert/HEQUTYJKPKU2',
    },
    {
      'image':'/assets/images/certifications/full_stack.png',
      'title':'Udacity Full Stack Web Developer',
      'description':'Signifies the completion of a rigorous training program that equips learners with the skills to design and develop modern web applications, covering both front-end and back-end development, and prepares them for practical, real-world projects.',
      'skills':['CGKDRYKR'],
      'visit':'https://www.udacity.com/certificate/CGKDRYKR',
    }
  ]
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
  


