import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateDriven',
  templateUrl: './templateDriven.component.html',
  styleUrls: ['./templateDriven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  constructor() {}
  user = {
    email: '',
    password: '',
  };

  ngOnInit() {}
  onSubmit(data: any) {
    if(data.valid){
      console.log("user data",this.user)
    }
    
  }
}
