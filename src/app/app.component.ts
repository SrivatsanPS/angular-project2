import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content=[];
  myFunc(a){
    this.content.push(a);
    console.log(this.content); 
  }  
  


  
}
