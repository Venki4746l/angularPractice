import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-Lifecycle',
  templateUrl: './Lifecycle.component.html',
  styleUrls: ['./Lifecycle.component.css'],
})
export class LifecycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {}
  count: number = 0;
  intervalId: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonChanges', changes);
  }

  ngOnInit() {
    console.log('ng Oninit');
    // this.intervalId = setInterval(() => {
    //   this.count = this.count + 1;
    // }, 2000);
  }
  ngDoCheck(): void {
    console.log('ng DoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ng after content init');
  }
  ngAfterContentChecked(): void {
    console.log('ng after content checked');
  }
  ngAfterViewInit(): void {
    console.log('ng after view init');
  }
  ngAfterViewChecked(): void {
    console.log('ng after viewchecked ');
  }
  ngOnDestroy(): void {
    console.log('ng OnDestroy');
    console.log('count at the time destroy ', this.count);

    clearInterval(this.intervalId);
  }
}
