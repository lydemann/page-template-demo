import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private pageTitle = signal<string>('');

  setPageTitle(title: string) {
    this.pageTitle.set(title);
    // Optionally, you can also update the document title
    document.title = title;
  }

  getPageTitle() {
    return this.pageTitle();
  }
}
