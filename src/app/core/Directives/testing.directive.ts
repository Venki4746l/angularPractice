import { AfterViewInit, Directive, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTesting]',
})
export class TestingDirective implements OnInit,AfterViewInit,OnChanges {
  constructor() {}
  @Input('appTesting') data: any;

  ngOnInit(): void {
    console.log("ngOnit initial ",this.data)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges",changes)
  }
  
  ngAfterViewInit() {
    console.log("ngAfterViewInit",this.data);
  }
}
