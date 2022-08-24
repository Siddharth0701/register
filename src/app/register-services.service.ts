import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegister } from './iregister';


@Injectable({
  providedIn: 'root'
})
export class RegisterServicesService {

  constructor( private httpClient: HttpClient) { }
  addRegister(register:IRegister){
    this.httpClient.post<IRegister>("https://localhost:44378/api/Registers",register,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=> console.log("Done"));
   }
}
