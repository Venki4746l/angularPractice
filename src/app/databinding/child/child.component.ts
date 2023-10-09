import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() chilData = new EventEmitter();
  EnterData: string = '';

  

  constructor() {}

  ngOnInit() {}
  passDataToParent() {
    this.chilData.emit(this.EnterData);
  }
}
