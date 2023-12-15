import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-app';
  titleClicked: string ='Recipe';

  handleTitle (titleClicked: string) {
    console.log("title: "+titleClicked);
    this.titleClicked = titleClicked;
    
  }
}
