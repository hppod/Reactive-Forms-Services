import { Component, OnInit } from '@angular/core';

//IMPORTANDO MODELO DE USUARIO
import { User } from './../user';

/*IMPORT FORM CONTROL FIRST*/
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SignupFormService } from './signup-form.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {

  //GENDER LIST FOR THE SELECT CONTROL ELEMENT
  private genderList: string[];
  //PROPERTY FOR THE USER
  private user: User;
  signupForm: FormGroup;

  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get gender() { return this.signupForm.get('gender'); }
  get terms() { return this.signupForm.get('terms'); }

  constructor(private fb: FormBuilder, private signupFormService: SignupFormService) { }

  ngOnInit() {
    this.genderList = ['Male', 'Female', 'Others'];

    this.signupForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormGroup({
        pwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPwd: new FormControl('', [Validators.required, Validators.minLength(8)]),

      }),
      gender: new FormControl('', Validators.required),
      terms: new FormControl('')
    })
  }

  public onFormSubmit() {
    this.user = this.signupForm.value;
    console.log(this.user);
    this.enviarFirebase();
  }

  public enviarFirebase(){
    this.signupFormService.enviarFirebase(this.signupForm.value)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  

}
