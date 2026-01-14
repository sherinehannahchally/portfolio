import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
    // ... keep your other existing animations here
  ]
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  // State for typed strings
  typedWhoami = '';
  typedCat = '';
  typedLs = '';

  // Visibility flags for responses
  showWhoamiResp = false;
  showCatResp = false;
  showLsResp = false;
  isComplete = false;

  ngOnInit() {
    this.startTerminalSession();
  }

  async startTerminalSession() {
    // 1. Type "whoami"
    await this.typeText('whoami', (v) => this.typedWhoami = v);
    await this.delay(300);
    this.showWhoamiResp = true;
    await this.delay(600);

    // 2. Type "cat stack_config.yaml"
    await this.typeText('cat stack_config.yaml', (v) => this.typedCat = v);
    await this.delay(300);
    this.showCatResp = true;
    await this.delay(600);

    // 3. Type "ls ./active_projects"
    await this.typeText('ls ./active_projects', (v) => this.typedLs = v);
    await this.delay(300);
    this.showLsResp = true;
    
    // 4. Finished
    this.isComplete = true;
  }

  // Real character-by-character logic
  private typeText(text: string, callback: (v: string) => void): Promise<void> {
    return new Promise((resolve) => {
      let i = 0;
      const timer = setInterval(() => {
        callback(text.substring(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(timer);
          resolve();
        }
      }, 60); // Speed: 60ms per character
    });
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}