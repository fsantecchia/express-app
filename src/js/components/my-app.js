import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hello {{ title }}</h1>'
})




// Component controller
export class MyAppComponent {
  title = 'Tour of Heroes';
}
