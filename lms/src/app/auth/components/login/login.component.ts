import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../../service/custom-validation.service';
import { ApiService } from 'src/app/services/api.service';
import { ID } from 'appwrite';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;
  public submitted = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private api: ApiService
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      
    }
    );
  }


  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const formData = this.loginForm.value

      // sign up => this.api.account().create(ID.unique(), "ahcsab@", 'acsay')
      
      this.api.account().createEmailSession(
        formData.email,
        formData.password
      ).then((resp: any) => {
        console.log(resp);
      }, err => {
        console.log(err);
      })


    }else{
      console.log("error");
    }
  }

}
