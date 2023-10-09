import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-Signal',
  templateUrl: './Signal.component.html',
  styleUrls: ['./Signal.component.css'],
})
export class SignalComponent implements OnInit {
  public count = signal(0);

  constructor() {}

  ngOnInit() {
    this.count.set(10);
    console.log(this.count());
  }
  increment() {
    this.count.update((old)=>old+1)
  }
  decrement() {
        this.count.update((old) => old - 1);

  }
}
