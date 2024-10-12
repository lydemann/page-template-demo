import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '@page-template-demo/ui';

interface AppData {
  message: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PageComponent],
  template: `
    <lib-page [title]="'My App'" [isLoading]="isLoading()" [error]="error()">
      <h1>Welcome to My App</h1>
      <p>{{ data()?.message }}</p>
    </lib-page>
  `,
  styles: [],
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
      if (random < 0.8) {
        this.data.set({ message: 'Data successfully loaded!' });
        this.isLoading.set(false);
      } else {
        this.error.set(new Error('Failed to load data'));
        this.isLoading.set(false);
      }
    }, 1000);
  }
}
