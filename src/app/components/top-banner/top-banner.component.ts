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
    'Facebook Marketer 💰',
    'SEO Knowledge Implementor 😎',
    'Ecommerce Knowledge Entrepreneur 📚',
    'Digital Art Designer ✨',
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
        'Facebook Marketer',
        'SEO Expert',
        'Ecommerce Wiz',
        'Digital Art Designer'
      )
      .start();
  }
}
