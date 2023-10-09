import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  myForm: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.myForm = FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  ngOnInit() {}
  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm)
     
    }
   
  }
}
