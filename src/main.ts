import { bootstrapApplication } from '@angular/platform-browser';
import {CategoryDropdownComponent} from '../src/app/category-dropdown/category-dropdown.component'
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  
  `,
})
export class App {
  name = 'Angular';
  
}

bootstrapApplication(CategoryDropdownComponent);
