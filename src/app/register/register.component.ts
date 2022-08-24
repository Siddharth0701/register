import { Component, Inject, OnInit } from '@angular/core';
import { RegisterServicesService } from '../register-services.service';
import { FormControl } from '@angular/forms';
import { IRegister } from '../iregister';
import { HttpClient } from '@angular/common/http';
@Inject(RegisterServicesService)

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname:FormControl=new FormControl("");
  lastname:FormControl=new FormControl("");
  email:FormControl=new FormControl("");
  mobilenumber:FormControl=new FormControl("");
  gender:FormControl=new FormControl("");
  password:FormControl=new FormControl("");
  repassword:FormControl=new FormControl("");


  constructor( private registerServices:RegisterServicesService) { }

  ngOnInit(): void {
  }
    save(){
      let register:IRegister={
        firstname: this.firstname.value,
        lastname: this.lastname.value,
        email: this.email.value,
        mobilenumber: this.mobilenumber.value,
        gender: this.gender.value,
        password: this.password.value,
        repassword: this.repassword.value
      };
      alert("Saved data")
      this.registerServices.addRegister(register)
    }


}
