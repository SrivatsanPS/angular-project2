import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cone',
  templateUrl: './cone.component.html',
  styleUrls: ['./cone.component.css']
})
export class ConeComponent implements OnInit {

    constructor() { }
    
    content=[];
    enterData(v){
      this.content.push(v.value)
    }
    func(e){
      e.style.textDecoration = "line-through"
    }
    
    // @Output() emitter = new EventEmitter();
    
    // enterData(e){
    //   this.content = e.value;
    //   this.emitter.emit(this.content);
      

    // }
  ngOnInit() {
  }

} 
