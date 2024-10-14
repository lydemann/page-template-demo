import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '@page-template-demo/shared/ui';
import { MatCardModule } from '@angular/material/card';

interface AppData {
  message: string;
}

const LOADING_TIME = 1000;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PageComponent, MatCardModule],
  template: `
    <lib-page [title]="'My App'" [isLoading]="isLoading()" [error]="error()">
      <mat-card class="max-w-md mx-auto mt-8 p-6">
        <mat-card-content>
          <div class="flex flex-col items-center justify-center text-center">
            <h1 class="text-2xl font-bold mb-4">Welcome to My App</h1>
            <p>{{ data()?.message }}</p>
          </div>
        </mat-card-content>
      </mat-card>
    </lib-page>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class AppComponent {
  isLoading = signal<boolean>(true);
  error = signal<Error | null>(null);
  data = signal<AppData | null>(null);

  constructor() {
    this.fetchData();
  }

  fetchData() {
    this.isLoading.set(true);
    this.error.set(null);

    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.data.set({ message: 'Data successfully loaded!' });
        this.isLoading.set(false);
      } else {
        this.error.set(new Error('Failed to load data'));
        this.isLoading.set(false);
      }
    }, LOADING_TIME);
  }
}
