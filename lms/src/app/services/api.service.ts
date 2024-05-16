import { Injectable } from '@angular/core';
import { Client, Account } from 'appwrite';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  provider() {
    let client = new Client();
    return client.setEndpoint(environment.endpoint).setProject(environment.project);
  }

  account(){
    return new Account(this.provider());
  }

}
