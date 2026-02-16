import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LucideAngularModule, Shirt } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LucideAngularModule,
    MatSlideToggleModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('celestial-wear');
}
