import { Component, OnInit } from '@angular/core';

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  darkMode!: string | null;

  constructor() {}

  ngOnInit(): void {
    this.darkMode = localStorage.getItem('dark-mode');

    if (this.darkMode === 'enabled') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  toggleDarkTheme(): void {
    this.darkMode = localStorage.getItem('dark-mode');

    if (this.darkMode === 'enabled') {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  private enableDarkMode(): void {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('dark-mode', 'enabled');
  }

  private disableDarkMode(): void {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('dark-mode', 'disabled');
  }
}
