import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  
  constructor(){}
  onSubmit(form:NgForm){
    if(form.valid)
    console.log(form)
    console.log(form.value.Email)
    console.log(form.value.Password)
    form.reset()
  }
}
