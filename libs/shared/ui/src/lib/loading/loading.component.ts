  import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

  @Component({
    selector: 'lib-loading',
    standalone: true,
    imports: [CommonModule, MatProgressSpinnerModule],
    template: `
      <div class="flex flex-col items-center justify-center h-full min-h-[200px]">
        <mat-spinner></mat-spinner>
        <!-- <p class="mt-4">{{ message() }}</p> -->
      </div>
    `,
  })
  export class LoadingComponent {
  message = input<string>('Loading...');
} 
