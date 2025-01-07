import { Component,inject } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

private formBuilder = inject(FormBuilder);
constructor(){

} 
  form = this.formBuilder.group({
    name: ['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    provideAddress:['',Validators.required],
    addressDetails: this.formBuilder.group({
      provideAddress: ['No'],
      address: [''],
    }),

  })




  onSubmit() {
 
    console.warn(this.form.value);
  }

}
