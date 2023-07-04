import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;
  formSubmitted = false;

   name:string;
   email:string;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      Name: new FormControl(null,Validators.required),
      Email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,]),

    })
  }
  submit(){
    if(this.reactiveForm.valid){
      this.formSubmitted = false;
      console.log(this.reactiveForm);
      this.name = this.reactiveForm.get('Name').value;
      this.email = this.reactiveForm.get('Email').value;
      
      this.reactiveForm.reset();
      


    
    }
    else{
      this.name='';
      this.email='';
      console.log('form invalid');
      this.formSubmitted = true;
    }
  }


}
