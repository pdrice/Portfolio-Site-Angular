import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css'],
})
export class TopBannerComponent implements OnInit {
  loopText = [
    'Full Stack Web Developer 💻',
    'System Intergration & Testing Engineer',
    'Certified in Security+',
    'Red Hat Certified System Administator',
    'Red Hat Certified Engineer',
    'Ethusiatic Developer 💎',
  ];

  constructor() {}
  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
    });

    writer
      .strings(
        500,
        'Full Stack Web Developer',
        'System Intergration & Testing Engineer',
        'Certified CompTIA Security+ Professional',
        'Red Hat Certified System Administator',
        'Red Hat Certified Engineer',
      )
      .start();
  }
}
