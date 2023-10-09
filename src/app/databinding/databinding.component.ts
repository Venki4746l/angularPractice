import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  dataBinding: string = 'this data from data binding';
  imageLink: string =
    'https://th.bing.com/th/id/OIP.zW3OVGECYTTfFxqBNU6vXwHaE9?w=226&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7';

  childDataRecivedData: string = '';
  childDataUsingViewChild: string = '';
  @ViewChild('child') childinfo?: any;

  constructor() {}

  ngOnInit() {}
  childDataRecived(event: any) {
    this.childDataRecivedData = event;
  }
}
