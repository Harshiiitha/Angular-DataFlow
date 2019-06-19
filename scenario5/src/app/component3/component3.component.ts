import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
   public grandchild="";
   @Output() public grandchildevent=new EventEmitter();
  constructor() { }

   senddata()
   {
     this.grandchildevent.emit(this.grandchild);
   }
  ngOnInit() {
  }

}
