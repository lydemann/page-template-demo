import { Component, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-error',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-icon mat-card-avatar color="warn">error</mat-icon>
        <mat-card-title>Error</mat-card-title>
        <mat-card-subtitle>{{ errorMessage }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-actions>
        <button mat-button color="primary" (click)="retry.emit()">RETRY</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    mat-card {
      max-width: 400px;
      margin: 2em auto;
      text-align: center;
    }
  `]
})
export class ErrorComponent {
  @Input() errorMessage: string = 'An error occurred. Please try again.';
  retry = output<void>();
}
