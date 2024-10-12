import { Component, effect, inject, input, TemplateRef, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorComponent } from '../error/error.component';
import { LayoutService } from '../layout/layout.service';

@Component({
  selector: 'lib-page',
  standalone: true,
  imports: [CommonModule, ErrorComponent, LoadingComponent],
  template: `
    @if (error()) {
      <ng-container *ngTemplateOutlet="errorTemplate || defaultErrorTemplate; context: {$implicit: error()}"></ng-container>
    } @else if (isLoading()) {
      <ng-container *ngTemplateOutlet="loadingTemplate || defaultLoadingTemplate"></ng-container>
    } @else {
      <ng-content></ng-content>
    }

    <!-- Default templates -->
    <ng-template #defaultErrorTemplate let-error>
      <lib-error [errorMessage]="error?.message"></lib-error>
    </ng-template>

    <ng-template #defaultLoadingTemplate>
      <lib-loading></lib-loading>
    </ng-template>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class PageComponent {
  @ContentChild('loadingTemplate', { static: false }) loadingTemplate?: TemplateRef<any>;
  @ContentChild('errorTemplate', { static: false }) errorTemplate?: TemplateRef<any>;

  error = input<Error | null>(null);
  isLoading = input<boolean>(false);
  title = input<string>('');
  private layoutService = inject(LayoutService);

  constructor() {
    effect(
      () => {
        this.layoutService.setPageTitle(this.title());
      },
      { allowSignalWrites: true }
    );
  }
}
